import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async (databaseId :  string) => {
  const response : any = await notion.databases.query({
    database_id: databaseId,
  });
  return response.results;
};

export const getPage = async (pageId : string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (blockId : string) => {
  blockId = blockId.replaceAll("-", "");

  const { results } = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 100,
});

  // Fetches all child blocks recursively - be mindful of rate limits if you have large amounts of nested blocks
  // See https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks : any = results.map(async (block : any) => {
    if (block.has_children) {
      const children = await getBlocks(block.id);
      return { ...block, children };
    }
    return block;
  });

  return await Promise.all(childBlocks).then((blocks) => {
    return blocks.reduce((acc, curr) => {
      if (curr.type === "bulleted_list_item") {
        if (acc[acc.length - 1]?.type === "bulleted_list") {
          acc[acc.length - 1][acc[acc.length - 1].type].children?.push(curr);
        } else {
          acc.push({
            id: getRandomInt(10 ** 99, 10 ** 100).toString(),
            type: "bulleted_list",
            bulleted_list: { children: [curr] },
          });
        }
      } else if (curr.type === "numbered_list_item") {
        if (acc[acc.length - 1]?.type === "numbered_list") {
          acc[acc.length - 1][acc[acc.length - 1].type].children?.push(curr);
        } else {
          acc.push({
            id: getRandomInt(10 ** 99, 10 ** 100).toString(),
            type: "numbered_list",
            numbered_list: { children: [curr] },
          });
        }
      } else {
        acc.push(curr);
      }
      return acc;
    }, []);
  });
};

function getRandomInt(min :  number, max : number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const renderNestedListMarkdown = (block: { [x: string]: any; type?: any; }) => {
  const { type } = block;
  const value = block[type];

  if (!value) return "";

  const isNumberedList = value.children[0].type === "numbered_list_item";
  const listType = isNumberedList ? "ol" : "ul";

  return value.children
    .map((child:any) => {
      const listItemText = child.numbered_list_item || child.bulleted_list_item;
      if (listItemText) {
        return `  - ${listItemText.rich_text[0].plain_text}\n${convertToMarkdown(child)}`;
      }
      return "";
    })
    .join("");
};

export const convertToMarkdown = (block: { [x: string]: any; id: any; children?: any; type?: any; }) => {
  const { type } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return `${value.rich_text}\n\n`;
    case "heading_1":
      return `# ${value.rich_text}\n\n`;
    case "heading_2":
      return `## ${value.rich_text}\n\n`;
    case "heading_3":
      return `### ${value.rich_text}\n\n`;
    case "bulleted_list":
    case "numbered_list":
      return value.children
        .map((child:any) => convertToMarkdown(child))
        .join("");
    case "bulleted_list_item":
    case "numbered_list_item":
      return `- ${value.rich_text}\n${renderNestedListMarkdown(block)}`;
    case "to_do":
      return `- [${value.checked ? "x" : " "}] ${value.rich_text}\n`;
    case "toggle":
      return `**${value.rich_text}**\n${block.children
        .map((child:any) => convertToMarkdown(child))
        .join("")}`;
    case "child_page":
      return `**${value.title}**\n${block.children
        .map((child:any) => convertToMarkdown(child))
        .join("")}`;
    case "image":
      const src = value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : "";
      return `![${caption}](${src})\n\n`;
    case "divider":
      return "---\n\n";
    case "quote":
      return `> ${value.rich_text[0].plain_text}\n\n`;
    case "code":
      return `\`\`\`${value.language}\n` + value.rich_text[0].plain_text + "\n```\n\n";
    case "file":
      const srcFile = value.type === "external" ? value.external.url : value.file.url;
      const captionFile = value.caption ? value.caption[0]?.plain_text : "";
      return `[${captionFile}](${srcFile})\n\n`;
    case "bookmark":
      return `[${value.url}](${value.url})\n\n`;
    case "table":
      return value.children
        .map((child:any) => convertToMarkdown(child))
        .join("");
    case "column_list":
      return block.children
        .map((child:any) => convertToMarkdown(child))
        .join("");
    case "column":
      return block.children
        .map((child:any) => convertToMarkdown(child))
        .join("");
    default:
      return `❌ Unsupported block (${type === "unsupported" ? "unsupported by Notion API" : type})\n\n`;
  }
};

type DevToPost = {
  title: string;
  content: string;
  tags: string;
  coverImageUrl: string;
  id?: string;
};


export const createDevToBlog = async ({title, content, tags, coverImageUrl,id}:DevToPost) => {
  try {

    if(id){
      const response = await axios.put(
      `https://dev.to/api/articles/${id}`,
      {
          article: {
          title: title,
          published: true,
          body_markdown: content,
          tags: tags,
          coverImageUrl: coverImageUrl,
          series: 'Notion To Dev To'
          },
      },
      {
          headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.DEV_TO_API_KEY,
          },
      }
      );
      return response.data;
    } else {
      const response = await axios.post(
        'https://dev.to/api/articles',
        {
            article: {
            title: title,
            published: true,
            body_markdown: content,
            tags: tags,
            coverImageUrl: coverImageUrl,
            series: 'Notion To Dev To'
            },
        },
        {
            headers: {
            'Content-Type': 'application/json',
            'api-key': process.env.DEV_TO_API_KEY,
            },
        }
        );
        return response.data;
      }
  } catch (error:any) {
      console.error('Error creating DEV.to blog post:', error.message);
      throw new Error('Failed to create DEV.to blog post with code :', error.response.status);
  }
  
};
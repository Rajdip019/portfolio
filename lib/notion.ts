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

export const getBlocksPage = async (linkedPageId: string) => {
  const response = await notion.blocks.children.list({
    block_id: linkedPageId,
  });
  return response;
}

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

interface DevToPost {
  title: string;
  content: string;
  tags: string;
  coverImageUrl: string;
  id?: string;
};

export const createDevToBlog = async ({title, content, tags, coverImageUrl,id}:DevToPost) => {
  try {
    if(id){
      const response = await fetch(`https://dev.to/api/articles/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'api-key': `${process.env.DEV_TO_API_KEY}`,
          },
          body: JSON.stringify({
            article: {
              title: title,
              published: true,
              body_markdown: content,
              tags: tags,
              coverImageUrl: coverImageUrl,
              series: 'Notion To Dev To'
            },
          }),
        })
        const post = await response.json()
        return post
    } else {
      const response = await fetch(`https://dev.to/api/articles`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'api-key': `${process.env.DEV_TO_API_KEY}`,
          },
          body: JSON.stringify({
            article: {
              title: title,
              published: true,
              body_markdown: content,
              tags: tags,
              coverImageUrl: coverImageUrl,
              series: 'Notion To Dev To'
            },
          }),
        })
      const post = await response.json();
      return post
    }
  } catch(err:any){
    console.error('Error creating DEV.to blog post:', err.message);
    throw new Error('Failed to create DEV.to blog post with code :', err.response.status);
  }
}
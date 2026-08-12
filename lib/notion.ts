import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

/**
 * Fetches every row of the database, following Notion's cursor pagination
 * (a single query caps out at 100 rows).
 */
export const getDatabase = async (databaseId :  string) => {
  const results : any[] = [];
  let cursor : string | undefined = undefined;

  do {
    const response : any = await notion.databases.query({
      database_id: databaseId,
      start_cursor: cursor,
      sorts: [{ timestamp: "created_time", direction: "descending" }],
    });
    results.push(...response.results);
    cursor = response.has_more ? response.next_cursor : undefined;
  } while (cursor);

  return results;
};

/**
 * Published posts only, newest first. Filtering on Notion's side keeps
 * unpublished drafts out of the page props entirely.
 */
export const getPublishedPosts = async (databaseId : string) => {
  const results : any[] = [];
  let cursor : string | undefined = undefined;

  do {
    const response : any = await notion.databases.query({
      database_id: databaseId,
      start_cursor: cursor,
      filter: { property: "Published", checkbox: { equals: true } },
      sorts: [{ timestamp: "created_time", direction: "descending" }],
    });
    results.push(...response.results);
    cursor = response.has_more ? response.next_cursor : undefined;
  } while (cursor);

  return results;
};

export const getPage = async (pageId : string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

/** True when Notion reports the page/block simply does not exist. */
export const isNotFoundError = (error : any) =>
  error?.code === "object_not_found" || error?.status === 404;

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
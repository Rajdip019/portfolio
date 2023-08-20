const renderNestedListMarkdown = (block:any) => {
    const { type } = block;
    const value = block[type];
  
    if (!value) return "";
  
    const isNumberedList = value.children?.type === "numbered_list_item";
    const listType = isNumberedList ? "ol" : "ul";
  
    return value.children?.map((child:any) => {
        const listItemText = child.numbered_list_item || child.bulleted_list_item;
        if (listItemText) {
          return `  - ${convertToMarkdown(listItemText.rich_text)}\n${convertToMarkdownNew(child)}`;
        }
        return "";
      })
      .join("");
  };
  
  function convertToMarkdown(richText:any) {
    return richText.map((textObj:any) => textObj.text.content).join('');
  }
  
  export const convertToMarkdownNew = (block:any) => {
    const { type } = block;
    const value = block[type];
  
    switch (type) {
      case "paragraph":
        return `${convertToMarkdown(value.rich_text)}\n\n`;
      case "heading_1":
        return `# ${convertToMarkdown(value.rich_text)}\n\n`;
      case "heading_2":
        return `## ${convertToMarkdown(value.rich_text)}\n\n`;
      case "heading_3":
        return `### ${convertToMarkdown(value.rich_text)}\n\n`;
      case "bulleted_list":
      case "numbered_list":
        return value.children?.map((child:any) => convertToMarkdownNew(child))
          .join("");
      case "bulleted_list_item":
      case "numbered_list_item":
        return `- ${convertToMarkdown(value.rich_text)}\n${renderNestedListMarkdown(block)}`;
      case "to_do":
        return `- [${value.checked ? "x" : " "}] ${convertToMarkdown(value.rich_text)}\n`;
      case "toggle":
        return `**${convertToMarkdown(value.rich_text)}**\n${block.children?.map((child:any) => convertToMarkdownNew(child))
          .join("")}`;
      case "child_page":
        return `**${value.title}**\n${block.children?.map((child:any) => convertToMarkdownNew(child))
          .join("")}`;
      case "image":
        const src = value.type === "external" ? value.external.url : value.file.url;
        const caption = value.caption ? value.caption[0]?.plain_text : "";
        return `![${caption}](${src})\n\n`;
      case "divider":
        return "---\n\n";
      case "quote":
        return `> ${convertToMarkdown(value.rich_text)}\n\n`;
      case "code":
        return `\`\`\`${value.language}\n` + convertToMarkdown(value.rich_text) + "\n```\n\n";
      case "file":
        const srcFile = value.type === "external" ? value.external.url : value.file.url;
        const captionFile = value.caption ? value.caption[0]?.plain_text : "";
        return `[${captionFile}](${srcFile})\n\n`;
      case "bookmark":
        return `[${value.url}](${value.url})\n\n`;
      case "table":
        return value.children?.map((child:any) => convertToMarkdownNew(child))
          .join("");
      case "column_list":
        return block.children?.map((child:any) => convertToMarkdownNew(child))
          .join("");
      case "column":
        return block.children?.map((child:any) => convertToMarkdownNew(child))
          .join("");
      default:
        return `❌ Unsupported block (${type === "unsupported" ? "unsupported by Notion API" : type})\n\n`;
    }
  };
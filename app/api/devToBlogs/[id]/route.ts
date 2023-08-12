import { getBlocks, getPage, createDevToBlog, getBlocksPage } from "@/lib/notion";
import { convertToMarkdownNew } from "@/lib/notion";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
    try{
        const formattedResponse = [];
        const linkedPageId = req.url.split('devToBlogs/')[1];
        const linkedPageResponse = await getBlocksPage(linkedPageId as string);
        const linkedPage = await getPage(linkedPageId as string);
        const contentMarkdown = linkedPageResponse.results.map((block: any) => {
            convertToMarkdownNew(block).join("\n");
        });
        formattedResponse.push({
            title: linkedPage.properties.Name.title[0].plain_text,
            content: contentMarkdown,
            coverImageUrl: linkedPage.cover.external.url,
            tags: linkedPage.properties['Tags'].multi_select.map((tag : any) => tag.name)
        });
        const response_publish = createDevToBlog(formattedResponse[0]);
        return NextResponse.json({message:"Success",post:formattedResponse, details: response_publish},{status:200});
    } catch (error:any) {
        NextResponse.json({message:"Error",error},{status:500});
    }
}

export const PUT = async (req: Request, res: Response) => {
    try{
        const formattedResponse = [];
        const linkedPageId = req.url.split('devToBlogs/')[1];
        const linkedPageResponse = await getBlocksPage(linkedPageId as string);
        const linkedPage = await getPage(linkedPageId as string);
        const contentMarkdown = linkedPageResponse.results.map((block: any) => {
            convertToMarkdownNew(block).join("\n");
        });
        const {id} = await res.json();
        formattedResponse.push({
            title: linkedPage.properties.Name.title[0].plain_text,
            content: contentMarkdown,
            coverImageUrl: linkedPage.cover.external.url,
            tags: linkedPage.properties['Tags'].multi_select.map((tag : any) => tag.name),
            id: id
        });
        const response_publish = createDevToBlog(formattedResponse[0]);
        return NextResponse.json({message:"Success",post:formattedResponse, details: response_publish},{status:200});
    } catch (error:any) {
        NextResponse.json({message:"Error",error},{status:500});
    }
}
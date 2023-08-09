import { getBlocks, getPage, createDevToBlog } from "@/lib/notion";
import { convertToMarkdown } from "@/lib/markdown";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
    try{
        const formattedResponse = [];
        const linkedPageId = req.query.id;
        const linkedPageResponse = await getBlocks(linkedPageId as string);
        const linkedPage = await getPage(linkedPageId as string);
        const contentMarkdown = linkedPageResponse.map((block: any) => {
            convertToMarkdown(block).join("\n");
        });
        formattedResponse.push({
            title: linkedPage.properties.Name.title[0].plain_text,
            content: contentMarkdown,
            coverImageUrl: linkedPage.cover.external.url,
            tags: linkedPage.properties['Tags'].multi_select.map((tag : any) => tag.name)
        });
        createDevToBlog(formattedResponse[0]);
        return NextResponse.json({message:"Success",post:formattedResponse},{status:200});
    } catch (error:any) {
        NextResponse.json({message:"Error",error},{status:500});
    }
}

export const PUT = async (req: Request, res: Response) => {
    try{
        const formattedResponse = [];
        const linkedPageId = req.query.id;
        const linkedPageResponse = await getBlocks(linkedPageId as string);
        const linkedPage = await getPage(linkedPageId as string);
        const contentMarkdown = linkedPageResponse.map((block: any) => {
            convertToMarkdown(block).join("\n");
        });
        formattedResponse.push({
            title: linkedPage.properties.Name.title[0].plain_text,
            content: contentMarkdown,
            coverImageUrl: linkedPage.cover.external.url,
            tags: linkedPage.properties['Tags'].multi_select.map((tag : any) => tag.name),
            id: linkedPageId
        });
        createDevToBlog(formattedResponse[0]);
        return NextResponse.json({message:"Success",post:formattedResponse},{status:200});
    } catch (error:any) {
        NextResponse.json({message:"Error",error},{status:500});
    }
}
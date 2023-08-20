// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getPage, createDevToBlog, getBlocksPage } from '@/lib/notion'
import { convertToMarkdownNew } from "@/lib/markdown"; 

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try{
      const formattedResponse = [];
      const {pid} = req.query;
      const linkedPageResponse = await getBlocksPage(pid as string);
      const linkedPage = await getPage(pid as string);
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
      res.status(200).json({message:"Success",post:formattedResponse, details: response_publish});
  } catch (error:any) {
      res.status(500).json({message:"Error",error});
  }
  } else if (req.method === 'PUT') {
    try {
      const formattedResponse = [];
      const {pid} = req.query;
      const linkedPageResponse = await getBlocksPage(pid as string);
      const linkedPage = await getPage(pid as string);
      const contentMarkdown = linkedPageResponse.results.map((block: any) => {
          convertToMarkdownNew(block).join("\n");
      });
      formattedResponse.push({
          title: linkedPage.properties.Name.title[0].plain_text,
          content: contentMarkdown,
          coverImageUrl: linkedPage.cover.external.url,
          tags: linkedPage.properties['Tags'].multi_select.map((tag : any) => tag.name),
          id: req.body?.id
      });
      const response_publish = createDevToBlog(formattedResponse[0]);
      res.status(200).json({message:"Success",post:formattedResponse, details: response_publish});
    } catch (error:any) {
      res.status(500).json({message:"Error",error});
    }
  } else {
    res.status(405).json({message:"Method not allowed"});
  }

  res.status(200).json({ name: 'John Doe' })
}
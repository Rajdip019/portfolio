/* eslint-disable @next/next/no-img-element */
import { Fragment, Key } from "react";
import { getDatabase, getPage, getBlocks, isNotFoundError } from "../../../lib/notion";
import Seo from "@/components/Shared/Seo";
import Image from "next/image";
import Link from "next/link";
import { databaseId } from "../../blogs";
import styles from "./post.module.css";
import { GetStaticPaths, GetStaticProps } from "next";
import { Text } from "@/components/Shared/NotionText";
import React from "react";
import { constant } from "@/helpers/constants";
import Code from "@/components/Code";

const renderNestedList = (block: { [x: string]: any; type?: any; }) => {
  const { type } = block;
  const value = block[type];
  if (!value) return null;

  const isNumberedList = value.children[0].type === "numbered_list_item";
  if (isNumberedList) {

    return <ol>{value.children.map((block: any) => renderBlock(block))}</ol>;
  }
  return <ul>{value.children.map((block: any) => renderBlock(block))}</ul>;
};

const renderBlock = (block: { [x: string]: any; id: any; children?: any; type?: any; }, readerMode?: number) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p className=" my-1 text-[#D5D5D5] text-lg">
          <Text text={value.rich_text} />
        </p>
      );
    case "heading_1":
      return (
        <h1 className=" text-4xl my-6 font-bold text-[#D5D5D5]">
          <Text text={value.rich_text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2 className=" text-3xl my-5 font-semibold text-[#D5D5D5]">
          <Text text={value.rich_text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3 className=" text-2xl mt-5 mb-2 font-semibold text-[#D5D5D5]">
          <Text text={value.rich_text} />
        </h3>
      );
    case "bulleted_list": {
      return <ul className="list-disc ml-4">{value.children.map((child: any) => renderBlock(child))}</ul>;
    }
    case "numbered_list": {
      return <ol className=" list-decimal ml-5">{value.children.map((child: any) => renderBlock(child))}</ol>;
    }
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li key={block.id}>
          <Text text={value.rich_text} />
          {value.children && renderNestedList(block)}
        </li>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
            <Text text={value.rich_text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary>
            <Text text={value.rich_text} />
          </summary>
          {block.children?.map((child: { id: string }) => (
            <Fragment key={child.id}>{renderBlock(child)}</Fragment>
          ))}
        </details>
      );
    case "child_page":
      return (
        <div className={styles.childPage}>
          <strong>{value.title}</strong>
          {block.children.map((child: any) => renderBlock(child))}
        </div>
      );
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          <img className="my-2 h-auto max-w-full rounded-lg" src={src} alt={caption} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    case "divider":
      return <hr className=" my-12" key={id} />;
    case "quote":
      return <blockquote key={id}>{value.rich_text[0].plain_text}</blockquote>;
    case "code":
      return (
        <div id={id}>
          <Code value={value} readerMode={readerMode} />
        </div>
      );
    case "file":
      const src_file =
        value.type === "external" ? value.external.url : value.file.url;
      const splitSourceArray = src_file.split("/");
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
      const caption_file = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          <div className={styles.file}>
            📎{" "}
            <Link href={src_file} passHref>
              {lastElementInArray.split("?")[0]}
            </Link>
          </div>
          {caption_file && <figcaption>{caption_file}</figcaption>}
        </figure>
      );
    case "bookmark":
      const href = value.url;
      return (
        <a href={href} target="_blank" className={styles.bookmark}>
          {href}
        </a>
      );
    case "table": {
      return (
        <table className={styles.table}>
          <tbody>
            {block.children?.map((child: { id: Key | null | undefined; table_row: { cells: any[]; }; }, i: number) => {
              const RowElement =
                value.has_column_header && i == 0 ? "th" : "td";
              return (
                <tr key={child.id}>
                  {child.table_row?.cells?.map((cell, i: any) => {
                    return (
                      <RowElement key={`${cell.plain_text}-${i}`}>
                        <Text text={cell} />
                      </RowElement>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
    case "column_list": {
      return (
        <div className={styles.row}>
          {block.children.map((block: any) => renderBlock(block))}
        </div>
      );
    }
    case "column": {
      return <div>{block.children.map((child: any) => renderBlock(child))}</div>;
    }
    default:
      return `❌ Unsupported block (${type === "unsupported" ? "unsupported by Notion API" : type
        })`;
  }
};

export default function Post({ page, blocks }: { page: any, blocks: any }) {

  const [readerMode, setReaderMode] = React.useState<number>(0);

  // Rendered while a not-yet-generated page is being fetched (fallback: true).
  if (!page || !blocks) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="flex items-center gap-3 font-mono text-sm text-subtle">
          <span className="h-3 w-1.5 animate-blink bg-accent" />
          fetching post...
        </div>
      </div>
    );
  }

  return (
    <div className={`${readerMode === 1 ? "bg-[#18181F]" : ""} pb-20 min-h-screen`}>
      <Seo
        title={`${page.properties.Name.title?.[0]?.plain_text ?? "Untitled post"} — ${constant.personalDetails.firstName} ${constant.personalDetails.lastName}`}
        description={
          page.properties.Name.title?.[0]?.plain_text
            ? `${page.properties.Name.title[0].plain_text} — written by ${constant.personalDetails.firstName} ${constant.personalDetails.lastName}.`
            : undefined
        }
        type="article"
        publishedTime={page.created_time}
      />
      {!!page.cover && (
        <div className="h-48 w-full overflow-hidden md:h-64">
          {/* w-full, not w-screen — 100vw includes the scrollbar and overflows */}
          <img src={page.cover?.external?.url ? page.cover?.external?.url : page.cover?.file?.url} alt="" className="h-48 w-full object-cover md:h-64" />
        </div>
      )}
      <article className="mx-auto w-11/12 max-w-3xl overflow-x-hidden break-words pt-10 md:w-10/12">
        <div className=" flex justify-between items-center">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value={readerMode} onChange={() => setReaderMode(readerMode === 1 ? 0 : 1)} className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Reader mode</span>
          </label>
        </div>
        <h1 className=" text-3xl md:text-5xl font-bold mt-7">
          <Text text={page.properties.Name.title} />
        </h1>
        <div className=" flex justify-between mt-5 flex-col md:flex-row">
          <div className=" flex gap-2 items-center">
            <Image
              src={constant.personalDetails.picture}
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 rounded-full object-cover"
            />
            {constant.personalDetails.firstName} {constant.personalDetails.lastName}
          </div>
          <div className=" flex items-center text-sm gap-2 my-2">
            <p>Published on : {new Date(page.created_time).toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            )}</p>
            <div>
            </div>
          </div>
        </div>
        <div className=" bg-gray-700 w-full h-0.5 my-5"></div>
        <section>
          {blocks.map((block: any) => (
            <div key={block.id} className=" my-5">{renderBlock(block, readerMode)}</div>
          ))}
        </section>
      </article>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const database = await getDatabase(databaseId as string);
  return {
    paths: database.map((page: { id: string; }) => ({ params: { id: page.id } })),
    // "blocking" renders new posts server-side, so an unknown id gets a real
    // 404 status instead of a 200 shell that never resolves.
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { id } = context.params;

  try {
    const page = await getPage(id);
    const blocks = await getBlocks(id);

    return {
      props: {
        page,
        blocks,
      },
      revalidate: 60,
    };
  } catch (error) {
    // An unknown id would otherwise leave the fallback page hanging forever.
    if (isNotFoundError(error)) {
      return { notFound: true, revalidate: 60 };
    }
    throw error;
  }
};
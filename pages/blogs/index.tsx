import { getPublishedPosts } from "@/lib/notion";
import Seo from "@/components/Shared/Seo";
import { GetStaticProps } from "next";
import { constant } from "@/helpers/constants";
import { useEffect, useState } from "react";
import React from "react";
import BlogCard from "@/components/Shared/BlogCard";
import SectionHeading from "@/components/Shared/SectionHeading";

export const databaseId = process.env.NOTION_DATABASE_ID;

/** Notion returns an empty title array for untitled pages — don't assume [0] exists. */
const postTitle = (post: any) =>
    post.properties?.Name?.title?.map((t: any) => t.plain_text).join("") ?? "";

export default function Home({ posts }: any) {
    const [search, setSearch] = useState("");
    const [published, setPublished] = useState(posts);

    useEffect(() => {
        const query = search.trim().toLowerCase();
        setPublished(
            query
                ? posts.filter((post: any) => postTitle(post).toLowerCase().includes(query))
                : posts
        );
    }, [posts, search]);

    return (
        <div className="min-h-screen pb-20">
            <Seo
                title={`Writing — ${constant.personalDetails.firstName} ${constant.personalDetails.lastName}`}
                description="Notes on infrastructure, distributed systems, and the things I learn breaking them."
            />
            <section className="mx-auto w-11/12 max-w-5xl pt-16 md:w-10/12">
                <SectionHeading
                    index="Writing"
                    title="All articles"
                    description="Notes on infrastructure, distributed systems, and the things I learn breaking them."
                />
                <div className="relative mb-6">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-mono text-sm text-accent">/</span>
                    <input
                        type="text"
                        className="w-full rounded-lg border border-white/[0.08] bg-white/[0.02] py-2.5 pl-8 pr-4 font-mono text-sm text-gray-200 placeholder-faint outline-none transition-colors duration-200 focus:border-accent/40"
                        placeholder="search posts..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <ol className="divide-y divide-white/[0.06]">
                    {published.length === 0 && (
                        <p className="py-20 text-center font-mono text-sm text-subtle">
                            No search results found :(
                        </p>
                    )}
                    {published.map((blog: any, index: number) => (
                        <BlogCard key={blog.id} post={blog} index={index} showAuthor />
                    ))}
                </ol>
            </section>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const database = await getPublishedPosts(databaseId as string);
    return {
        props: {
            posts: database,
        },
        // Background refresh; use /api/revalidate for an instant update.
        revalidate: 60,
    };
};

import Head from "next/head";
import { getDatabase } from "@/lib/notion";
import { Text } from "@/components/Shared/NotionText";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { constant } from "@/helpers/constants";
import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import React from "react";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }: any) {
    const [search, setSearch] = useState("");
    const [blogs, setBlogs] = useState(posts);
    const router = useRouter();

    const handleRoute = (id: string) => {
        router.push(`/blog/${id}`);
    }

    useEffect(() => {
        setBlogs(posts.filter((post: any) => post.properties.Name.title[0].plain_text.toLowerCase().includes(search.toLowerCase())));
    }, [posts, search]);

    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    console.log(posts[0]);
    

    return (
        <div className="pb-20 min-h-screen">
            <Head>
                <title>{constant.personalDetails.firstName}&apos;s Blog</title>
                <meta name="description" content="Started with frontend, built amazing projects using that, moved to backend and fell in love ❤️ with scalable backend architectures 🚀 and cloud ☁️ while playing with AWS, GCP, Azure, Docker 🐳, Kubernetes and terraform." />
            </Head>
            <motion.section
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isInView ? 1 : 0, y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className=" w-10/12 md:w-8/12 mx-auto pt-10">
                    <div className=" flex mb-8 items-center">
                        <h2 className="text-3xl font-bold text-gray-300 w-full">All articles</h2>
                        <input type="text" className=" w-full py-2 px-4 bg-black border border-gray-800 rounded text-lg" placeholder="Search for blogs" onChange={(e) => setSearch(e.target.value)} />
                    </div>
                <ol className="">
                    {blogs.filter((blog: any) => blog.properties.Published.checkbox === true).length === 0 && (<p className="text-2xl text-center mt-20">No search results found {': ('}</p>)}
                    {blogs.filter((blog: any) => blog.properties.Published.checkbox === true)?.map((blog: any) => {
                        const date = new Date(blog.created_time).toLocaleString(
                            "en-US",
                            {
                                month: "short",
                                day: "2-digit",
                                year: "numeric",
                            }
                        );
                        return (
                            <li key={blog.id} onClick={() => handleRoute(blog.id)} className=" bg-black my-3 rounded-lg p-5 border-gray-800 border hover:bg-gray-900 text-gray-300 transition-all cursor-pointer group relative">
                                <h3 className=" text-lg md:text-xl font-semibold md:group-hover:text-[1.7rem] transition-all">
                                    <Text text={blog.properties.Name.title} />
                                </h3>
                                <div className=" flex items-center text-sm gap-2 my-2">
                                    <p>Published on : {date}</p>
                                    <span className=" hidden md:block">by {constant.personalDetails.firstName} {constant.personalDetails.lastName}</span>
                                </div>
                                <div className=" flex gap-2">
                                    {blog.properties?.Tags?.multi_select?.map((tag: any) => (
                                        <span key={tag.id} className=" bg-gray-800 px-2 py-1 text-xs rounded-md">{tag.name}</span>
                                    ))}
                                </div>
                                <p className=" hidden right-5 bottom-5 absolute group-hover:block">Read post →</p>
                            </li>
                        );
                    })}
                </ol>
            </motion.section>
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const database = await getDatabase(databaseId as string);
    return {
        props: {
            posts: database,
        },
        revalidate: 1,
    };
};
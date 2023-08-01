import Head from "next/head";
import { getDatabase } from "@/lib/notion";
import { Text } from "@/components/Shared/NotionText";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { constant } from "@/helpers/constants";
import { useEffect, useState } from "react";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }: any) {
    const [search, setSearch] = useState("");
    const [blogs, setBlogs] = useState(posts);
    const router = useRouter();

    const handleRoute = (id: string) => {
        router.push(`/blog/${id}`);
    }

    useEffect(() => {
        setBlogs( posts.filter((post: any) => post.properties.Name.title[0].plain_text.includes(search)));
    }, [posts, search])

    return (
        <div className="bg-gray-950 bg-pattern pb-20 min-h-screen">
            <Head>
                <title>Rajdeep&apos;s blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className=" w-10/12 md:w-7/12 mx-auto pt-10">
                <h2 className="text-4xl font-bold">All articles</h2>
                <div className=" bg-gray-700 w-full h-0.5 my-5"></div>
                <input type="text" className=" w-full py-2 px-4 bg-slate-800 border border-black rounded text-lg" placeholder="Search for blogs" onChange={(e) => setSearch(e.target.value)} />
                <ol className="">
                    {blogs.filter((blog: any) => blog.properties.Published.checkbox === false).length === 0 && (<p className="text-2xl text-center mt-20">No search results found {': ('}</p>)}
                    {blogs.filter((blog: any) => blog.properties.Published.checkbox === true)?.map((blog: any) => {
                        const date = new Date(blog.last_edited_time).toLocaleString(
                            "en-US",
                            {
                                month: "short",
                                day: "2-digit",
                                year: "numeric",
                            }
                        );
                        return (
                            <li key={blog.id} onClick={() => handleRoute(blog.id)} className=" bg-gray-950 my-3 rounded-lg p-5 border-gray-800 border hover:bg-gray-900 transition-all cursor-pointer group relative">
                                <h3 className=" text-xl md:text-2xl font-semibold md:group-hover:text-[1.7rem] transition-all">
                                    <Text text={blog.properties.Name.title} />
                                </h3>
                                <div className=" flex items-center text-sm gap-2 my-2">
                                    <p>Published on : {date}</p>
                                    <span className=" hidden md:block">by {constant.personalDetails.firstName} {constant.personalDetails.lastName}</span>
                                </div>
                                <p className=" hidden right-5 bottom-5 absolute group-hover:block">Read post →</p>
                            </li>
                        );
                    })}
                </ol>
            </main>
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
import Head from "next/head";
import Link from "next/link";
import { getDatabase } from "@/lib/notion";
import { Text } from "@/components/Shared/NotionText";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { constant } from "@/helpers/constants";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function Home({ posts }: any) {
    const router = useRouter();

    const handleRoute = (id: string) => {
        router.push(`/blog/${id}`);
    }

    console.log("post", posts);
    return (
        <div className="bg-slate-950 bg-pattern pb-20 min-h-screen">
            <Head>
                <title>Rajdeep&apos;s blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className=" w-8/12 mx-auto pt-10">
                <h2 className="text-4xl font-bold">All articles</h2>
                <div className=" bg-gray-700 w-full h-0.5 my-5"></div>
                <ol className="">
                    {posts.filter((post: any) => post.properties.Published.checkbox === true)?.map((post: any) => {
                        const date = new Date(post.last_edited_time).toLocaleString(
                            "en-US",
                            {
                                month: "short",
                                day: "2-digit",
                                year: "numeric",
                            }
                        );
                        return (
                            <li key={post.id} onClick={() => handleRoute(post.id)} className=" bg-gray-950 my-3 rounded-lg p-5 border-gray-800 border hover:bg-gray-900 transition-all cursor-pointer group relative">
                                <h3 className=" text-2xl font-semibold group-hover:text-[1.7rem] transition-all">
                                    <Text text={post.properties.Name.title} />
                                </h3>
                                <div className=" flex items-center text-sm gap-2 my-2">
                                <p>Published on : {date}</p>
                                    by {constant.personalDetails.firstName} {constant.personalDetails.lastName}
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
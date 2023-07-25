import React from 'react'
import { Text } from '../Shared/NotionText'
import { useRouter } from 'next/router'
import { constant } from '@/helpers/constants'
import Link from 'next/link'

interface Props {
    posts: any
}

const RecentBlogs: React.FC<Props> = ({ posts }: any) => {

    const router = useRouter();

    const handleRoute = (id: string) => {
        router.push(`/blog/${id}`);
    }

    return (
        <section className='mt-10 '>
            <div className=' flex justify-between items-center'>
                <h1 className='text-2xl font-semibold text-gray-200'>Recent Blogs</h1>
                <Link href={'/blogs'} className=' hover:underline underline-offset-4'>View all</Link>
            </div>
            <div className=" bg-gray-700 w-full h-0.5 my-5"></div>
            <ol className="">
                {posts.filter((post: any) => post.properties.Published.checkbox === true)?.slice(0, 5).map((post: any) => {
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
                            <h3 className=" text-lg font-semibold group-hover:text-xl transition-all">
                                <Text text={post.properties.Name.title} />
                            </h3>
                            <div className=" flex items-center text-sm gap-2 my-2">
                                <p>Published on : {date}</p>
                            </div>
                            <p className=" hidden right-5 bottom-5 absolute group-hover:block">Read post →</p>
                        </li>
                    );
                })}
            </ol>
        </section>
    )
}

export default RecentBlogs
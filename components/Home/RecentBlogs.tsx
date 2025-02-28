import React, { useRef } from 'react'
import { Text } from '../Shared/NotionText'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'

interface Props {
    posts: any
}

const RecentBlogs: React.FC<Props> = ({ posts }: any) => {


    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const router = useRouter();

    const handleRoute = (id: string) => {
        router.push(`/blogs/${id}`);
    }

    return (
        <section className='mt-16 mb-20 '>
            <div className=' flex justify-between items-center mb-5'>
                <h1 className='text-2xl font-semibold text-gray-200'>Recent Blogs</h1>
                <Link href={'/blogs'} className=' hover:scale-105 transition-all'>View all</Link>
            </div>
            <ol className="">
                {posts?.filter((post: any) => post.properties.Published.checkbox === true).length === 0 && (<p className="text-2xl text-center mt-20">No recent blogs found {': ('}</p>)}
                {posts?.filter((post: any) => post.properties.Published.checkbox === true)?.slice(0, 3).map((post: any, index: number) => {
                    const date = new Date(post.created_time).toLocaleString(
                        "en-US",
                        {
                            month: "short",
                            day: "2-digit",
                            year: "numeric",
                        }
                    );
                    return (
                        <motion.li
                            ref={ref}
                            initial={{ opacity: 0, translateY: 0 }}
                            animate={isInView ? { opacity: 1, translateY: 0 } : { opacity: 0, translateY: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2, ease: 'easeOut' }}
                            key={post.id} onClick={() => handleRoute(post.id)} className=" bg-black my-3 rounded-lg p-5 border-gray-800 border hover:bg-gray-900 hover:scale-105 transition-all cursor-pointer group relative">
                            <h3 className="text-lg md:text-xl font-semibold transition-all">
                                <Text text={post.properties.Name.title} />
                            </h3>
                            <div className=" flex items-center text-sm gap-2 my-2">
                                <p>Published on : {date}</p>
                            </div>
                            <div className=" flex gap-2">
                                {post.properties?.Tags?.multi_select?.map((tag: any) => (
                                    <span key={tag.id} className=" bg-gray-800 px-2 py-1 text-xs rounded-md">{tag.name}</span>
                                ))}
                            </div>
                            <p className=" hidden right-5 bottom-5 absolute group-hover:block">Read post →</p>
                        </motion.li>
                    );
                })}
            </ol>
        </section>
    )
}

export default RecentBlogs

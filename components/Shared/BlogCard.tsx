import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { Text } from './NotionText'

interface Props {
    post: any;
    index?: number;
    showAuthor?: boolean;
}

/** Editorial list row — date in the rail, title leading, tags underneath. */
const BlogCard: React.FC<Props> = ({ post, index = 0 }) => {
    const router = useRouter();

    const date = new Date(post.created_time);
    const year = date.getFullYear();
    const short = date.toLocaleString("en-US", { month: "short", day: "2-digit" });

    return (
        <motion.li
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
            onClick={() => router.push(`/blogs/${post.id}`)}
            className="group cursor-pointer py-5 first:pt-0"
        >
            <div className="flex flex-col gap-1.5 sm:flex-row sm:gap-6">
                <span className="w-24 shrink-0 pt-1 font-mono text-xs text-gray-600">
                    {short}, {year}
                </span>

                <div className="min-w-0 flex-1">
                    <h3 className="flex items-start gap-2 text-[17px] font-medium leading-snug text-gray-200 transition-colors duration-200 group-hover:text-accent-soft">
                        <span className="min-w-0">
                            <Text text={post.properties.Name.title} />
                        </span>
                        <span className="mt-1 shrink-0 text-xs text-gray-700 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100">
                            →
                        </span>
                    </h3>

                    {post.properties?.Tags?.multi_select?.length > 0 && (
                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                            {post.properties.Tags.multi_select.map((tag: any) => (
                                <span key={tag.id} className="chip">
                                    {tag.name}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </motion.li>
    )
}

export default BlogCard

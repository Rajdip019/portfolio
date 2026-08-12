import React from 'react'
import BlogCard from '../Shared/BlogCard'

interface Props {
    posts: any
}

const RecentBlogs: React.FC<Props> = ({ posts }: any) => {
    // Already filtered to published + newest-first by getPublishedPosts().
    const published = posts ?? [];

    return (
        <div>
            {published.length === 0 && (
                <p className="font-mono text-sm text-gray-600">No posts yet.</p>
            )}
            <ol className='divide-y divide-white/[0.06]'>
                {published.slice(0, 4).map((post: any, index: number) => (
                    <BlogCard key={post.id} post={post} index={index} />
                ))}
            </ol>
        </div>
    )
}

export default RecentBlogs

import About from '@/components/Home/About'
import Experiences from '@/components/Home/Experiences'
import RecentBlogs from '@/components/Home/RecentBlogs'
import TechStack from '@/components/Home/TechStack'
import { GetStaticProps } from 'next/types'
import React from 'react'
import { getDatabase } from '@/lib/notion'
import { databaseId } from './blog'

const Home = ( { posts } : any) => {
  return (
    <div className='bg-pattern min-h-screen bg-gray-950'>
      <div className=' w-10/12 md:w-8/12 mx-auto py-10 ' >
        <About />
        <TechStack />
        <Experiences />
        <RecentBlogs posts={posts} />
      </div>
    </div>
  )
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

export default Home
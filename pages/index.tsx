import About from '@/components/Home/About'
import Experiences from '@/components/Home/Experiences'
import RecentBlogs from '@/components/Home/RecentBlogs'
import TechStack from '@/components/Home/TechStack'
import { GetStaticProps } from 'next/types'
import React from 'react'
import { getDatabase } from '@/lib/notion'
import { databaseId } from './blog'
import Head from 'next/head'
import { constant } from '@/helpers/constants'

const Home = ( { posts } : any) => {
  return (
    <>
    <Head>
      <title>{constant.personalDetails.firstName}&apos;s Portfolio</title>
      <meta name="description" content="Started with frontend, built amazing projects using that, moved to backend and fell in love ❤️ with scalable backend architectures 🚀 and cloud ☁️ while playing with AWS, GCP, Azure, Docker 🐳, Kubernetes and terraform." />
    </Head>
    <div className='bg-pattern min-h-screen bg-gray-950'>
      <div className=' w-10/12 md:w-8/12 mx-auto py-10 ' >
        <About />
        <TechStack />
        <Experiences />
        <RecentBlogs posts={posts} />
      </div>
    </div>
    </>
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
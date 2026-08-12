import About from '@/components/Home/About'
import Impact from '@/components/Home/Impact'
import RecentBlogs from '@/components/Home/RecentBlogs'
import TechStack from '@/components/Home/TechStack'
import { GetStaticProps } from 'next/types'
import React from 'react'
import { getPublishedPosts } from '@/lib/notion'
import { databaseId } from './blogs'
import Head from 'next/head'
import { constant } from '@/helpers/constants'
import Experience from '@/components/Home/Experience'
import PersonalExperiences from '@/components/Home/PersonalExperiences'
import SideProjects from '@/components/Home/SideProjects'
import Section from '@/components/Shared/Section'

const Home = ({ posts }: any) => {
  return (
    <>
      <Head>
        <title>{`${constant.personalDetails.firstName}'s Portfolio`}</title>
        <meta name="description" content={constant.positioning} />
      </Head>

      <div className='mx-auto w-11/12 max-w-5xl md:w-10/12'>
        <About />
        <Impact />

        <Section index="01" title="Experience" href="/work-experiences" linkLabel="Full history">
          <Experience />
        </Section>

        <Section index="02" title="Stack">
          <TechStack />
        </Section>

        <Section index="03" title="Building" href="/side-projects">
          <SideProjects />
        </Section>

        <Section index="04" title="Writing" href="/blogs">
          <RecentBlogs posts={posts} />
        </Section>

        <Section index="05" title="Recognition">
          <PersonalExperiences />
        </Section>
      </div>
    </>
  )
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

export default Home

#!/bin/bash

# This script is used to prepare the environment for the build process.

## Removing the /pages/index.tsx file
rm -rf ../pages/index.tsx

## make a new /pages/index.tsx file
touch ../pages/index.tsx

## add this data to the /pages/index.tsx file
cat > ../pages/index.tsx <<EOL
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
        <div className=' text-center my-20 text-5xl font-semibold'>Show your Creativity here...</div>
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
EOL

## Removing About, Experiences and TechStack components

rm -rf ../components/Home/About.tsx
rm -rf ../components/Home/Experiences.tsx
rm -rf ../components/Home/TechStack.tsx

## remove ../helpers/constants.ts file
rm -rf ../helpers/constants.ts

## make a new ../helpers/constants.ts file
touch ../helpers/constants.ts

## add this data to the ../helpers/constants.ts file
cat > ../helpers/constants.ts <<EOL
export const constant = {
  personalDetails: {
    firstName: "Your",
    lastName: "Name",
    email: "test@gmail.com",
    picture: "/profile-pic.jpeg",
    website: "https://rajdeep.vercel.app", // Use https here
    linkedin: "https://www.linkedin.com/in/rajdeep-sengupta/",
    github: "https://github.com/Rajdip019",
    twitter: "https://twitter.com/RajdeepS019",
    resume : "resume link here"
  },
  technologiesAndLanguages: [
    {
        name: "TypeScript",
        icon: "https://img.icons8.com/?size=512&id=uJM6fQYqDaZK&format=png",
    },
    {
        name: "JavaScript",
        icon: "https://img.icons8.com/?size=512&id=108784&format=png",
    },
    {
      name: "Golang",
      icon: "https://img.icons8.com/?size=512&id=44442&format=png",
    },
    {
      name: "React",
      icon: "https://img.icons8.com/?size=512&id=NfbyHexzVEDk&format=png",
    },
    {
      name: "Next.js",
      icon: "https://www.datocms-assets.com/75941/1657707878-nextjs_logo.png",
    },
    {
      name: "Node.js",
      icon: "https://img.icons8.com/?size=512&id=54087&format=png",
    },
    {
      name: "Express.js",
      icon: "https://img.icons8.com/?size=512&id=WNoJgbzDr3i2&format=png",
    },
    {
      name: "Docker",
      icon: "https://img.icons8.com/?size=512&id=22813&format=png",
    },
    {
      name: "Kubernetes",
      icon: "https://img.icons8.com/?size=512&id=cvzmaEA4kC0o&format=png",
    },
    {
      name: "AWS",
      icon: "https://img.icons8.com/?size=512&id=33039&format=png",
    },
    {
      name: "GCP",
      icon: "https://img.icons8.com/?size=512&id=WHRLQdbEXQ16&format=png",
    },
    {
      name: "Terraform",
      icon: "https://img.icons8.com/?size=512&id=kEkT1u7zTDk5&format=png",
    },
    {
      name: "Ansible",
      icon: "https://img.icons8.com/?size=512&id=iGCCE2iEmh2u&format=png",
    },
    {
      name: "Linux",
      icon: "https://img.icons8.com/?size=512&id=17842&format=png",
    },
    {
      name: "Git",
      icon: "https://img.icons8.com/?size=512&id=20906&format=png",
    }
  ],
};
EOL


## make a .env.local file

touch ../.env.local

## add this data to the .env.local file
cat > ../.env.local <<EOL
NOTION_TOKEN=
NOTION_DATABASE_ID=
EOL

## install dependencies
npm install


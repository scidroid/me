import { GetStaticProps } from "next";

import {
  getAllPostsWithSlug,
  getLatestThought,
  getPostBySlug
} from "lib/content";
import { Post } from "lib/types";
import { NextSeo } from "next-seo";
import React from "react";

import About from "components/About";
import ContactSection from "components/Contact";
import Content from "components/Content";
import Featured from "components/Featured";
import Hero from "components/Hero";
import NowPlaying from "components/NowPlaying";
import ThoughtSection from "components/Thought";

type Props = {
  thought: string;
  featuredPost: Post;
  posts: Post[];
};

const Home: React.FC<Props> = ({ thought, featuredPost, posts }) => {
  return (
    <>
      <NextSeo title="Home" />
      <div className="flex flex-wrap w-full">
        <Hero />
        <About />

        <Featured
          headline="Featured Project"
          name="Searchy"
          description="Searchy is a phone line that allows users to search the internet, even if they don't have an modern phone, and it has won the National Programming Contest in Third Place."
          image="/searchy.jpg"
          githubUrl="https://github.com/asofiorg/searchy"
        />
        <NowPlaying />
        <Content
          name="AgroScan"
          description="AgroScan is a PWA that detects plant diseases with ML, even when offline."
          image="/agroscan.png"
          githubUrl="https://github.com/asofiorg/agroscan"
        />
        <Content
          name="Virufy Dashboard"
          description="Next.js interactive map dashboard for Virufy, with live data of shared data."
          image="/virufy.png"
          demoUrl="https://virufy-dashboard.vercel.app/"
        />
        <Content
          name="ASOFI.us"
          description="ASOFI.us is a website for my non-profit, building peace through STEAM."
          image="/asofi.png"
          demoUrl="https://asofi.us"
        />
        <ThoughtSection content={thought} />
        <Featured
          headline="Featured Writing"
          name={featuredPost.title}
          description={featuredPost.description}
          image={`https://cdn.sanity.io/images/29neet2j/production/${featuredPost.mainImage.asset._ref
            .substring("image-".length)
            .replace(/-(?!.*-)/, ".")}`}
          seeMoreUrl={`/${featuredPost.slug}`}
        />
        {posts.map(post => (
          <Content
            key={post._id}
            name={post.title}
            description={post.description}
            image={`https://cdn.sanity.io/images/29neet2j/production/${post.mainImage.asset._ref
              .substring("image-".length)
              .replace(/-(?!.*-)/, ".")}`}
            seeMoreUrl={`/${post.slug}`}
          />
        ))}
        <ContactSection />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const thought = await getLatestThought();

  const posts: Post[] = await getAllPostsWithSlug().then(posts => {
    return Promise.all(
      posts.map(async (i: Post) => {
        return await getPostBySlug(i.slug);
      })
    );
  });

  return {
    props: {
      thought: thought.text,
      featuredPost: posts[0],
      posts: posts.slice(1)
    },
    revalidate: 60
  };
};

export default Home;

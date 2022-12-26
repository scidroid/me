/* eslint-disable react-hooks/exhaustive-deps */
import { GetStaticPaths, GetStaticProps } from "next";

import { getAllPostsWithSlug, getPostBySlug } from "lib/content";
import { Post } from "lib/types";
import { NextSeo } from "next-seo";
import React, { useEffect, useState } from "react";
import Balancer from "react-wrap-balancer";

import Body from "components/Body";
import ContactSection from "components/Contact";
import Hero from "components/Hero";
import Double from "components/elements/Double";
import FullPage from "components/elements/FullPage";

type Props = {
  post: Post;
};

const PostPage: React.FC<Props> = ({ post }) => {
  const [views, setViews] = useState("Loading...");

  useEffect(() => {
    fetch(`/api/view?slug=${post.slug}`, {
      method: "POST"
    })
      .then(res => res.json())
      .then(res => setViews(`${res.count} views`))
      .catch(_ => setViews(`No views`));
  }, []);

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.description}
        openGraph={{
          title: post.title,
          description: post.description,
          images: [
            {
              url: `/api/og?title=${post.title}`,
              alt: post.title
            }
          ]
        }}
      />
      <div className="flex flex-wrap">
        <Double>
          <h1 className="font-bold text-center text-6xl my-4">
            <Balancer>{post.title}</Balancer>
          </h1>
          <p className="text-center text-xl py-4">
            <Balancer>{post.description}</Balancer>
          </p>
          <p className="text-center text-xl py-4">{`${new Date(
            post.date
          ).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
          })} - ${views}`}</p>
        </Double>
        <Hero />
        <FullPage>
          <Body content={post.body} />
        </FullPage>
        <ContactSection />
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPostsWithSlug();

  return {
    paths: posts.map((post: Post) => ({
      params: { slug: post.slug }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params) {
    return {
      notFound: true
    };
  }

  const post = await getPostBySlug(params.slug as string);

  return {
    props: { post }
  };
};

export default PostPage;

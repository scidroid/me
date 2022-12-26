import client from "lib/sanity";

import { Post } from "./types";

const postFields = `
  _id,
  title,
  description,
  "slug": slug.current,
  "likes": coalesce(likes, 0),
  body,
  mainImage,
  "date": publishedAt,
  "comments": *[_type == "comment" && post._ref == ^._id]{_id, name, comment, _createdAt}
`;

const getAllPostsWithSlug = async () => {
  return await client.fetch(
    `*[_type == "post"] | order(publishedAt desc){ 'slug': slug.current }`
  );
};

const getPostBySlug = async (slug: string) => {
  const posts = await client.fetch(
    `*[_type == "post" && slug.current == $slug] | order(publishedAt desc){
            ${postFields}
          }`,
    { slug }
  );

  return posts[0];
};

const thoughtFields = `
    _id,
    text,
`;

const getLatestThought = async () => {
  const thoughts = await client.fetch(
    `*[_type == "thought"] | order(publishedAt desc){
            ${thoughtFields}
            }`
  );

  return thoughts[0];
};

export { getAllPostsWithSlug, getPostBySlug, getLatestThought };

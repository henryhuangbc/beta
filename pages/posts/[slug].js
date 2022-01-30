import Post from "components/Post";
import { getPostBySlug, getAllPosts } from "lib/posts-api";
import markdownToHtml from "lib/markdown-to-html";

import styles from "styles/Posts.module.scss";

import Meta from "components/Meta";

export default function SinglePost({ post }) {
  return (
    <>
      <Meta page={post.title} />
      <div className={styles.wrapper}>
        <Post postData={post} />
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "slug",
    "title",
    "desc",
    "date",
    "tags",
    "content",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

<<<<<<< HEAD
import UI from "components/UI";

import { getPostBySlug, getAllPosts } from "lib/posts-api";
import markdownToHtml from "lib/markdown-to-html";

import Post from "components/Post";
import styles from "styles/Posts.module.scss";

export default function SinglePost({ post }) {
  return (
    <UI page={post.title} desc={post.desc}>
      <div className={styles.wrapper}>
        <Post postData={post} content />
      </div>
    </UI>
=======
import Post from "components/Post";
import { getPostBySlug, getAllPosts } from "lib/posts-api";
import markdownToHtml from "lib/markdown-to-html";

import styles from "styles/Posts.module.scss";

import Meta from "components/Meta";

export default function SinglePost({ post }) {
  return (
    <>
      <Meta page={post.title} desc={post.desc} />

      <div className={styles.wrapper}>
        <Post postData={post} content />
      </div>
    </>
>>>>>>> 0d2bbe0ff564dea5e559d1e3dfae5c7ea65d91a6
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

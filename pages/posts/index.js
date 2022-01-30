import Post from "components/Post";
import { getAllPosts } from "lib/posts-api";
import markdownToHtml from "lib/markdown-to-html";

import styles from "styles/Posts.module.scss";
import { v4 as uuidv4 } from "uuid";

import Meta from "components/Meta";

export default function SinglePost({ allPosts }) {
  return (
    <>
      <Meta page="Posts" />

      <div className={styles.wrapper}>
        {allPosts.map((post) => {
          return <Post postData={post} key={uuidv4()} />;
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "slug",
    "title",
    "desc",
    "date",
    "tags",
    "desc",
  ]);

  return {
    props: { allPosts },
  };
}

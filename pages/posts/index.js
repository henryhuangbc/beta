import Post from "components/Post";
import { getAllPosts } from "lib/posts-api";

import styles from "styles/Posts.module.scss";
import { v4 as uuidv4 } from "uuid";

import Meta from "components/Meta";
import PostSearch from "components/PostSearch";
import { useState } from "react";

export default function SinglePost({ allPosts }) {
  const [shown, setShown] = useState(allPosts.reverse());

  return (
    <>
      <Meta page="Posts" />

      <div className={styles.wrapper}>
        <PostSearch posts={allPosts} shown={setShown} />

        {shown.map((post) => {
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
    "date",
    "tags",
    "desc",
    "content",
  ]);

  return {
    props: { allPosts },
  };
}

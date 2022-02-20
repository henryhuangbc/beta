<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import UI from "components/UI";

import { getAllPosts } from "lib/posts-api";
import Post from "components/Post";
import PostSearch from "components/PostSearch";

import styles from "styles/Posts.module.scss";
=======
=======
>>>>>>> 0d2bbe0ff564dea5e559d1e3dfae5c7ea65d91a6
import Post from "components/Post";
import { getAllPosts } from "lib/posts-api";

import styles from "styles/Posts.module.scss";
import { v4 as uuidv4 } from "uuid";

import Meta from "components/Meta";
import PostSearch from "components/PostSearch";
import { useState } from "react";
<<<<<<< HEAD
>>>>>>> 0d2bbe0ff564dea5e559d1e3dfae5c7ea65d91a6
=======
>>>>>>> 0d2bbe0ff564dea5e559d1e3dfae5c7ea65d91a6

export default function SinglePost({ allPosts }) {
  const [shown, setShown] = useState(allPosts);

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <UI page="Posts">
=======
    <>
      <Meta page="Posts" />

>>>>>>> 0d2bbe0ff564dea5e559d1e3dfae5c7ea65d91a6
=======
    <>
      <Meta page="Posts" />

>>>>>>> 0d2bbe0ff564dea5e559d1e3dfae5c7ea65d91a6
      <div className={styles.wrapper}>
        <PostSearch posts={allPosts} shown={setShown} />

        {shown.map((post) => {
          return <Post postData={post} key={uuidv4()} />;
        })}
      </div>
<<<<<<< HEAD
<<<<<<< HEAD
    </UI>
=======
    </>
>>>>>>> 0d2bbe0ff564dea5e559d1e3dfae5c7ea65d91a6
=======
    </>
>>>>>>> 0d2bbe0ff564dea5e559d1e3dfae5c7ea65d91a6
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

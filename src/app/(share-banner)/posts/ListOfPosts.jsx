import React from "react";
import Link from "next/link";
import LikeButton from "./[id]/LikeButton";

const fetchPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function ListOfPosts() {
  const posts = await fetchPosts();
  //console.log(posts)
  return (
    <>
      {posts.slice(0, 5).map((post) => (
        <article
          key={post.id}
          style={{ border: "1px solid green", margin: "2rem 0" }}
        >
          <Link href="/posts/[id]" as={`/posts/${post.id}`}>
            <h2 style={{ color: "#09f", padding: "1rem 0 " }}>{post.title}</h2>
            <p>{post.body}</p>
          </Link>
          <LikeButton id={post.id} />
        </article>
      ))}
    </>
  );
}

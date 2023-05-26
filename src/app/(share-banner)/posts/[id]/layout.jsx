import Link from "next/link";

const fetchSinglePost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function Post({ params, children }) {
  const { id } = params;
  const post = await fetchSinglePost(id);
  //console.log(post);

  return (
    <article style={{margin:'1rem 0'}}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={"/posts/[id]/comments"} as={`/posts/${id}/comments`} style={{border: '1px solid yellow'}}>
        Ver comentarios
      </Link>
      {children}
    </article>
  );
}

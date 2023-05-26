import Image from "next/image";
import Link from "next/link";
import { resolve } from "styled-jsx/css";

const fetchComments = async(id) => {
  await new Promise(resolve => setTimeout(resolve, 5000))
  
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export default async function CommentsPage({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <ul style={{background:'#444', padding:'1rem 1rem 1rem 2rem', marginTop:'2rem'}}>
      {comments.map((comment) => (
        <li key={comment.id} style={{ margin: "1rem 0" }}>
          <Image alt={comment.name} width='50' height='50' src={`https:avatars.dicebear.com/api/pixel-art-neutral/${comment.mail}.svg`}/>
          <h4 >{comment.name}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  );
}

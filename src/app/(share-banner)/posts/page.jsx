import React, { Suspense } from "react";
import ListOfPosts from "./ListOfPosts";

const PostsPage = () => {
  return (
    <>
      <Suspense fallback={<p>Cargando lista de posts...</p>}>
        <ListOfPosts />
      </Suspense>
    </>
  );
};

export default PostsPage;

import React from "react";
import { useGetPosts, useGetPost, useCreatePost } from "../api";
import { Button } from "../components";

const Apis = () => {
  const { data: posts } = useGetPosts();
  const { data: post } = useGetPost(1);
  const { mutate, isLoading } = useCreatePost();

  console.log(posts);
  console.log(post);
  return (
    <div dir="ltr" className="flex flex-col items-start p-4 gap-2">
      look at console and src/api folder
      <Button loading={isLoading} onClick={() => mutate({ name: "ali" })}>
        create post
      </Button>
    </div>
  );
};

export default Apis;

import { useMutation } from "react-query";
import axios from "axios";

export default function useCreatePost() {
  return useMutation(newPost => {
    return axios.post("https://jsonplaceholder.typicode.com/posts", newPost);
  });
}

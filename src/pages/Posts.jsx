import { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const result = await axios.get("http://localhost:3000/posts", {
        withCredentials: true,
      });

      console.log(result.data);
      setPosts(result.data);
    };

    getPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <div>{JSON.stringify(posts)}</div>
    </div>
  );
};

export default Posts;

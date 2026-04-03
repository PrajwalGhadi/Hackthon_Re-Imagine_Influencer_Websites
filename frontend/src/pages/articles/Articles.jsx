import { useContext, useEffect, useState } from "react";
import { ContextAPI } from "../../context/ContextAPI";

import clsx from "clsx";
import MyThoughts from "./mythoughts/MyThoughts";

const Articles = () => {
  const { myThoughts, getAllPost, setBackendPosts } = useContext(ContextAPI);
  const [posts, setPosts] = useState([]);
  const [mergedPosts, setMergedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await getAllPost();
        if (result && result.data) {
          setPosts(result.data);
          setBackendPosts(result.data); // Store in context for access in Posts.jsx
        } else if (result && Array.isArray(result)) {
          setPosts(result);
          setBackendPosts(result); // Store in context for access in Posts.jsx
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [getAllPost, setBackendPosts]);

  // Merge both myThoughts and backend posts
  useEffect(() => {
    const jsonPosts = myThoughts?.mythoughts?.posts || [];
    const backendPostsArray = Array.isArray(posts) ? posts : [];

    // Combine both arrays - backend posts first, then JSON posts
    const combined = [...backendPostsArray, ...jsonPosts];
    setMergedPosts(combined);
  }, [myThoughts, posts]);

  return (
    <>
      <main
        id="Articles"
        className={clsx(
          "flex flex-col font-[Inter] px-[4vw] gap-[10vw]",
          "lg:gap-[2vw] lg:pt-[5vw] lg:min-h-[100vh]",
        )}
      >
        <MyThoughts myThoughts={myThoughts} getAllPost={mergedPosts} />

        {/* Display Backend Posts */}
        {/* <section className="flex flex-col gap-5">
          <h2 className="text-3xl font-bold">Latest Posts</h2>
          {loading ? (
            <p>Loading posts...</p>
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map((post) => (
                <div
                  key={post._id}
                  className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
                  <div
                    className="text-gray-600 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  <p className="text-sm text-gray-500 mt-3">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p>No posts available</p>
          )}
        </section> */}
      </main>
    </>
  );
};

export default Articles;

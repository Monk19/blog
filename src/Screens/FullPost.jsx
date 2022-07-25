import React from "react";
import { allBlogPosts } from "./CreatePost";
function FullPost({ post, blogDeSelect }) {
  console.log(post);
  return (
    <div className="full-Post-View blog-post">
      <h1 className="fullpost-head blog-post-head">{post?.blogHeading}</h1>
      <p className="fullpost-description ">{post?.blogDescription}</p>
      <button
        onClick={() => {
          console.log(allBlogPosts);
          blogDeSelect();
        }}
      >
        Close
      </button>
    </div>
  );
}

export default FullPost;

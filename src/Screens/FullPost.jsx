import React from "react";
import { allBlogPosts } from "./CreatePost";
import { useParams, useNavigate } from "react-router-dom";
function FullPost({ post, blogDeSelect }) {
  const navigate = useNavigate();
  const { postName } = useParams();
  console.log(postName);
  return (
    <div className="full-Post-View blog-post">
      <h1 className="fullpost-head blog-post-head">
        {allBlogPosts[+postName].blogHeading}
      </h1>
      <p className="fullpost-description ">
        {allBlogPosts[+postName].blogDescription}
      </p>
      <button onClick={() => navigate(-1)}>Close</button>
    </div>
  );
}

export default FullPost;

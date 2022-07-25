import React, { useState } from "react";
import CommonHeader from "./CommonHeader";
import { allBlogPosts } from "./CreatePost";
import FullPost from "./FullPost";
import SingleBlogPost from "./SingleBlogPost";

export default function Trending() {
  const [blogViewStatus, setBlogViewStatus] = useState(false);
  const [index, setIndex] = useState("");
  console.log(allBlogPosts);
  const Styles = {
    visibility: blogViewStatus ? "hidden" : "visible",
  };
  const blogSelect = (index) => {
    setBlogViewStatus(!blogViewStatus);
    setIndex(index);
  };
  return (
    <div className="Tending">
      <CommonHeader title={"Trending"} />
      <div>Trending</div>

      {blogViewStatus ? (
        <FullPost
          ind={index}
          post={allBlogPosts[index]}
          blogDeSelect={blogSelect}
        />
      ) : (
        <div className="blog-post" style={Styles}>
          {allBlogPosts.map((post, index) => {
            return (
              <SingleBlogPost
                key={JSON.stringify(index)}
                posts={post}
                index={index}
                blogSelect={blogSelect}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

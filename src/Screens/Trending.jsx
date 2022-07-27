import React, { useState } from "react";
import CommonHeader from "./CommonHeader";
import { allBlogPosts } from "./CreatePost";
import FullPost from "./FullPost";
import SingleBlogPost from "./SingleBlogPost";
import { Outlet, Link, useParams, useLocation } from "react-router-dom";
export default function Trending({ cmntCount }) {
  // let {}
  // const [blogViewStatus, setBlogViewStatus] = useState(false);
  const [index, setIndex] = useState("");
  console.log(allBlogPosts, window.location.href);

  // const blogSelect = (index) => {
  //   setBlogViewStatus(!blogViewStatus);
  //   setIndex(index);
  // };

  return (
    <div className="Tending">
      <CommonHeader title={"Trending"} />
      <div>Trending</div>

      <div className="blog-post">
        {allBlogPosts.map((post, index) => {
          return (
            <SingleBlogPost
              key={JSON.stringify(index)}
              posts={post}
              index={index}
              cmntCount={cmntCount}
              link={`/storyboard/${index}`}
            />
          );
        })}
      </div>
      <Outlet />
      {/* <FullPost
        ind={index}
        post={allBlogPosts[index]}
        blogDeSelect={blogSelect}
      /> */}
    </div>
  );
}

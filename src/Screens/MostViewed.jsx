import React, { useEffect } from "react";
import CommonHeader from "./CommonHeader";
import { allBlogPosts } from "./CreatePost";
import SingleBlogPost from "./SingleBlogPost";
import { Outlet } from "react-router-dom";
export default function MostViewed({ cmntCount }) {
  const maxViewCount = [];
  const fun1 = () => {
    console.log(allBlogPosts);

    for (const x in allBlogPosts) {
      console.log(x);
      const z = allBlogPosts[x]["view"] > 0 ? allBlogPosts[x]["view"] + 1 : 0;
      maxViewCount.push(+z);
    }
    console.log(allBlogPosts[maxViewCount.indexOf(Math.max(...maxViewCount))]);
  };
  useEffect(() => {
    fun1();
  }, {});
  return (
    <div className="mostviewed-container">
      <CommonHeader />
      <div>Most-Viewed</div>
      <div className="blog-post">
        {allBlogPosts.map((post, index) => {
          return (
            <SingleBlogPost
              key={JSON.stringify(index)}
              posts={post}
              index={index}
              cmntCount={cmntCount}
            />
          );
        })}
      </div>
      <Outlet />
    </div>
  );
}

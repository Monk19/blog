import React, { useEffect } from "react";
import CommonHeader from "./CommonHeader";
import { allBlogPosts } from "./CreatePost";
import SingleBlogPost from "./SingleBlogPost";
export default function MostViewed() {
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
      {allBlogPosts.map((Element, index) => {
        return <SingleBlogPost />;
      })}
    </div>
  );
}

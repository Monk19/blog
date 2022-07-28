import React, { useEffect, useState } from "react";
import CommonHeader from "./CommonHeader";
import { allBlogPosts } from "./CreatePost";
import SingleBlogPost from "./SingleBlogPost";
import { Outlet } from "react-router-dom";
import SearchByGenerComponetHoc from "./SearchByGenerComponetHoc";
const MostViewed = ({ cmntCount }) => {
  const [search, setSearch] = useState("");
  const makeSearch = (searchWord) => {
    console.log(searchWord);
    setSearch(searchWord);
  };
  console.log(window.location.href);

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
  }, []);
  return (
    <div className="mostviewed-container">
      <CommonHeader searchFun={makeSearch} />
      <div>Most-Viewed</div>
      <div className="blog-post">
        {allBlogPosts.map((post, index) => {
          for (var i = 0; i < post.gener.length; i++) {
            if (search !== " ") {
              if (
                post.gener[i]
                  .toLocaleLowerCase()
                  .match(search.toLocaleLowerCase())
              ) {
                return (
                  <SingleBlogPost
                    key={JSON.stringify(index)}
                    posts={post}
                    index={index}
                    cmntCount={cmntCount}
                    link={`/most-viewed/${index}`}
                  />
                );
              }
            } else {
              return (
                <SingleBlogPost
                  key={JSON.stringify(index)}
                  posts={post}
                  index={index}
                  cmntCount={cmntCount}
                  link={`/most-viewed/${index}`}
                />
              );
            }
          }
        })}
      </div>
      <Outlet />
    </div>
  );
};
export default SearchByGenerComponetHoc(MostViewed);

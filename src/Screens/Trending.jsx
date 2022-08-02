import React, { useState } from "react";
import CommonHeader from "./CommonHeader";
import { allBlogPosts } from "./CreatePost";
import FullPost from "./FullPost";
import SingleBlogPost from "./SingleBlogPost";
import { Outlet, Link, useParams, useLocation } from "react-router-dom";
import SearchByGenerComponetHoc from "./SearchByGenerComponetHoc";

const Trending = ({ cmntCount }) => {
  // let {}
  // const [blogViewStatus, setBlogViewStatus] = useState(false);
  const [index, setIndex] = useState("");
  console.log(allBlogPosts, window.location.href);

  // const blogSelect = (index) => {
  //   setBlogViewStatus(!blogViewStatus);
  //   setIndex(index);
  // };
  const [search, setSearch] = useState("");
  const makeSearch = (searchWord) => {
    setSearch(searchWord);
    console.log(searchWord);
  };
  // console.log(window.location.href);

  return (
    <div className="Tending">
      <CommonHeader title={"Trending"} searchFun={makeSearch} />
      <div>Trending</div>

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
                    link={`/storyboard/${index}`}
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
                  link={`/storyboard/${index}`}
                />
              );
            }
          }
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
};
export default SearchByGenerComponetHoc(Trending);

import { memo, React, useEffect, useState } from "react";
import { allBlogPosts } from "./CreatePost";
import { Link } from "react-router-dom";
import SearchByGenerComponetHoc from "./SearchByGenerComponetHoc";
const SingleBlogPost = ({
  posts,
  blogSelect,
  index,
  children,
  cmntCount,
  link,
}) => {
  console.log("child re-rendered");
  const [viewLikeStatusState, setViewLikeStatusState] = useState({
    like: 0,
    comment: 0,
    view: 0,
  });

  const viewStatus = () => {
    setViewLikeStatusState((prev) => ({
      like: allBlogPosts[index].like ? allBlogPosts[index].like : 0,
      view: allBlogPosts[index].view ? allBlogPosts[index].view : 0,
      comment: allBlogPosts[index].comment ? viewLikeStatusState.comment : 0,
    }));
  };
  const postStatus = (x) => {
    console.log(allBlogPosts[index][x]);
    if (allBlogPosts[index][x]) {
      // console.log(allBlogPosts[index][x]);
      allBlogPosts[index][x] += 1;
      setViewLikeStatusState((prev) => ({
        ...prev,
        [x]: viewLikeStatusState[x] + 1,
      }));
    } else {
      allBlogPosts[index][x] = 1;
      setViewLikeStatusState((prev) => ({
        ...prev,
        [x]: 1,
      }));
    }
  };
  useEffect(() => {
    viewStatus();
    console.log(allBlogPosts);
  }, []);
  return (
    <div className="single-post">
      <figure className="thumbnail">
        <img src={posts.selectedImage} />
      </figure>
      <Link
        to={link}
        onClick={() => {
          postStatus("view");
        }}
      >
        <h1 className="blog-post-head">{posts.blogHeading}</h1>
      </Link>
      <Link
        to={link}
        onClick={() => {
          postStatus("view");
        }}
      >
        <p className="blog-post-Description">{posts.blogDescription}</p>
      </Link>
      <div className="view-icons">
        <div>
          <i className="fa-solid fa-eye"></i>
          <span>{viewLikeStatusState.view}</span>
        </div>
        <div>
          <i
            class="fa-regular fa-thumbs-up"
            onClick={() => {
              postStatus("like");
            }}
          ></i>
          <span>{viewLikeStatusState.like}</span>
        </div>
        <div>
          <i
            className="fa-solid fa-comment"
            onClick={() => {
              postStatus("comment");
            }}
          ></i>
          <span>
            {allBlogPosts[index].comment !== undefined
              ? allBlogPosts[index].comment.length
              : ""}
          </span>
        </div>
      </div>
      {/* <div className="blog-img">
        <img src={`${}`} />
      </div> */}
    </div>
  );
};

export default SingleBlogPost;

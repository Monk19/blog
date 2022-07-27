import { memo, React, useEffect, useState } from "react";
import { allBlogPosts } from "./CreatePost";
import { Link } from "react-router-dom";
const SingleBlogPost = ({ posts, blogSelect, index, children, cmntCount }) => {
  console.log("child re-rendered");
  const [viewLikeStatusState, setViewLikeStatusState] = useState({
    like: 0,
    comment: 0,
    view: 0,
  });

  const viewStatus = () => {
    setViewLikeStatusState((prev) => ({
      like: allBlogPosts[index].like ? allBlogPosts[index].like + 1 : 0,
      view: allBlogPosts[index].view ? allBlogPosts[index].view + 1 : 0,
      comment: allBlogPosts[index].comment ? viewLikeStatusState.comment : 0,
    }));
  };
  const postStatus = (x) => {
    console.log(allBlogPosts[index]);
    if (allBlogPosts[index][x]) {
      // console.log(allBlogPosts[index][x]);
      setViewLikeStatusState((prev) => ({
        ...prev,
        [x]: viewLikeStatusState[x] + 1,
      }));
      allBlogPosts[index][x] = viewLikeStatusState[x];
    } else {
      setViewLikeStatusState((prev) => ({
        ...prev,
        [x]: 1,
      }));
      allBlogPosts[index][x] = 1;
    }
  };
  useEffect(() => {
    viewStatus();
  }, []);
  return (
    <div className="single-post">
      <Link
        to={`/storyboard/${index}`}
        onClick={() => {
          postStatus("view");
        }}
      >
        <h1 className="blog-post-head">{posts.blogHeading}</h1>
      </Link>
      <Link
        to={`/storyboard/${index}`}
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

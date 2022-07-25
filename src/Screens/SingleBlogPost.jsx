import { memo, React, useEffect, useState } from "react";
import { allBlogPosts } from "./CreatePost";
const SingleBlogPost = ({ posts, blogSelect, index }) => {
  console.log("child re-rendered");
  const [viewLikeStatusState, setViewLikeStatusState] = useState({
    like: 0,
    comment: 0,
    view: 0,
  });
  const Styles = {
    backgroundImage: `url(${posts.selectedImage})}`,
  };
  const viewStatus = () => {
    setViewLikeStatusState({
      like: allBlogPosts[index].like,
      view: allBlogPosts[index].view,
      comment: allBlogPosts[index].comment,
    });
  };
  const kissStupid = (x) => {
    if (allBlogPosts[index][x] > 0) {
      allBlogPosts[index][x] += 1;
      setViewLikeStatusState((prev) => ({
        ...prev,
        [x]: (allBlogPosts[index][x] += 1),
      }));
    } else {
      allBlogPosts[index][x] = 1;
      setViewLikeStatusState((prev) => ({
        ...prev,
        [x]: (allBlogPosts[index][x] = 1),
      }));
    }
  };
  useEffect(() => {
    viewStatus();
  }, []);
  return (
    <div style={Styles} className="single-post">
      <h1
        className="blog-post-head"
        onClick={() => {
          blogSelect(index);
        }}
      >
        {posts.blogHeading}
      </h1>
      <p
        className="blog-post-Description"
        onClick={() => {
          blogSelect(index);
        }}
      >
        {posts.blogDescription}
      </p>
      <div className="view-icons">
        <div>
          <i
            className="fa-solid fa-eye"
            onClick={() => {
              console.log(allBlogPosts);
              kissStupid("view");
            }}
          ></i>
          <span>{viewLikeStatusState.view}</span>
        </div>
        <div>
          <i class="fa-regular fa-thumbs-up" onClick={() => {}}></i>{" "}
          <span>{viewLikeStatusState.like}</span>
        </div>
        <div>
          <i className="fa-solid fa-comment" onClick={() => {}}></i>{" "}
          <span>{viewLikeStatusState.comment}</span>
        </div>
      </div>
      {/* <div className="blog-img">
        <img src={`${}`} />
      </div> */}
    </div>
  );
};

export default SingleBlogPost;

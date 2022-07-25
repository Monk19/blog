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
    // setViewLikeStatusState({
    //   like: allBlogPosts[index].like ? allBlogPosts[index].like : 0,
    //   view: allBlogPosts[index].view ? allBlogPosts[index].view : 0,
    //   comment: allBlogPosts[index].comment ? allBlogPosts[index].comment : 0,
    // });
  };
  const kissStupid = (x) => {
    console.log(allBlogPosts[index]);
    if (allBlogPosts[index][x]) {
      // console.log(allBlogPosts[index][x]);
      setViewLikeStatusState((prev) => ({
        ...prev,
        x: (viewLikeStatusState.view += 1),
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
    // viewStatus();
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
              kissStupid("view");
            }}
          ></i>
          <span>{viewLikeStatusState.view}</span>
        </div>
        <div>
          <i
            class="fa-regular fa-thumbs-up"
            onClick={() => {
              kissStupid("like");
            }}
          ></i>{" "}
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

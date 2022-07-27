import { useState, useEffect, React } from "react";
import { allBlogPosts } from "./CreatePost";
import { useParams, useNavigate } from "react-router-dom";
import logo from "../assets/images/950079.png";

function FullPost({ post, blogDeSelect, commentCount }) {
  // window.history.pushState(
  //   {},
  //   undefined,
  //   " http://localhost:3000/most-viewed/1"
  // );

  const [comment, setComment] = useState({
    allComments: ["made a comment"],
    currentComment: "",
  });
  const navigate = useNavigate();
  const { postName } = useParams();
  console.log(postName);

  useEffect(() => {
    if (allBlogPosts[+postName]["comment"]) {
      setComment(() => ({
        allComments: [...allBlogPosts[+postName]["comment"]],
        currentComment: "",
      }));
    } else {
      setComment(() => ({
        allComments: [],
        currentComment: "",
      }));
    }
  }, []);
  return (
    <div className="full-Post-View blog-post">
      <h1 className="fullpost-head blog-post-head">
        {allBlogPosts[+postName].blogHeading}
        <button onClick={() => navigate(-1)}>Close</button>
      </h1>
      <p className="fullpost-description ">
        {allBlogPosts[+postName].blogDescription}
      </p>
      <div className="enter-section">
        <div className="enter-comment-section">
          <div className="comment-logo">
            <img src={logo} />
          </div>
          <textarea
            onChange={(e) => {
              setComment((prev) => ({
                allComments: [...comment.allComments],
                currentComment: e.target.value,
              }));
            }}
            value={comment.currentComment}
            placeholder="please enter a comment"
          />

          <div>
            <button
              onClick={() => {
                if (allBlogPosts[+postName]["comment"]) {
                  allBlogPosts[+postName]["comment"].push(
                    comment.currentComment
                  );
                } else {
                  allBlogPosts[+postName]["comment"] = [comment.currentComment];
                }
                setComment((prev) => ({
                  allComments: [...prev.allComments, prev.currentComment],
                  currentComment: " ",
                }));
                commentCount(allBlogPosts[+postName]["comment"].length);
              }}
            >
              submit
            </button>
          </div>
        </div>

        {comment.allComments?.map((cmt, index) => {
          return (
            <div key={JSON.stringify(index)} className="comments-posted">
              <img src={logo} className="cmt-img" />
              <p>{cmt}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FullPost;

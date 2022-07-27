import { React, useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import ChildRerender from "./ChildRerender";
import CommonHeader from "./CommonHeader";
import { allBlogPosts } from "./CreatePost";

function MyView() {
  const navigate = useNavigate();
  const [stateChange, setStateChange] = useState(1);
  const [x, setx] = useState(1);
  console.log("loged");
  useEffect(() => {
    console.log("UseEffect Ran");
    // setTimeout(() => {
    //   console.log("time out function rendered with useEffect");
    // }, 1000);
    return () => {
      console.log("clean up");
    };
  }, []);
  return (
    <div className="myview-container">
      <CommonHeader title="My Views" />
      <div>MyView</div>
      <div className="views-grid">
        <div
          onClick={() => {
            setStateChange((prev) => prev + 1);
          }}
        >
          <h4>Most Liked</h4>
          <span>
            <i class="fa-solid fa-face-kiss-wink-heart"></i>
          </span>
          <strong></strong>
        </div>
        {console.log("My view is rendered")}
        <div
        // onClick={() => {
        //   setx(x + 1);
        // }}
        >
          <h4>Most Viewed</h4>
          <span>
            <i class="fa-solid fa-users-between-lines"></i>
          </span>
          <strong>10</strong>
        </div>
        <div>
          <h4>Most Commente</h4>
          <span>
            <i class="fa-solid fa-dove"></i>
          </span>
          <strong>25</strong>
        </div>
        <div>
          <h4>Total Posts</h4>
          <span>
            <i class="fa-solid fa-clone"></i>
          </span>
          <strong>{allBlogPosts.length}</strong>
        </div>
        <div>
          <h4>Most Viewed autors</h4>
          <span>
            <i class="fa-solid fa-pencil"></i>
          </span>
          <strong>0</strong>
        </div>
        <ChildRerender />
      </div>
    </div>
  );
}

export default MyView;

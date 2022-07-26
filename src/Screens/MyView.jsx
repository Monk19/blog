import React from "react";
import CommonHeader from "./CommonHeader";

function MyView() {
  return (
    <div className="myview-container">
      <CommonHeader title="My Views" />
      <div>MyView</div>
      <div className="views-grid">
        <div>
          <h4>Most Liked</h4>
          <span>
            <i class="fa-solid fa-face-kiss-wink-heart"></i>
          </span>
          <strong>10</strong>
        </div>
        <div>
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
          <strong>0</strong>
        </div>
        <div>
          <h4>Most Viewed autors</h4>
          <span>
            <i class="fa-solid fa-pencil"></i>
          </span>
          <strong>0</strong>
        </div>
      </div>
    </div>
  );
}

export default MyView;

import { React, memo } from "react";

const CommonHeader = memo(({ title }) => {
  return (
    <div className="common-header">
      <div>
        {title === "Trending" || "x" || "y" ? (
          <i className="fa-solid fa-fire-flame-curved"></i>
        ) : (
          ""
        )}
      </div>
      <div>
        <div>{title}</div>
      </div>
      <div>
        <input type="search" placeholder="search"></input>
      </div>
    </div>
  );
});
export default CommonHeader;

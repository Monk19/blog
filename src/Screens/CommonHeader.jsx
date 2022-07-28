import { React, memo, useState } from "react";

const CommonHeader = memo(({ title, searchFun }) => {
  // const [searchValue, setSearchValue] = useState("");
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
        <input
          type="search"
          placeholder="search"
          onChange={(e) => {
            searchFun(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
});
export default CommonHeader;

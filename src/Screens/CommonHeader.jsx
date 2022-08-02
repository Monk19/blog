import { React, memo, useState } from "react";
import logout from "../assets/images/icons8-logout-rounded-down-64.png";
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
      <div>
        <img
          className="logout-btn"
          src={logout}
          alt="logout"
          onClick={() => {}}
          style={{ width: "30px" }}
        />
      </div>
    </div>
  );
});
export default CommonHeader;

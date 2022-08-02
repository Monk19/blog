import "./topBar.modules.css";
import { useContext, useState, createContext, React, memo } from "react";
import { Link } from "react-router-dom";
export const ThemeContext = createContext({});
const SideBar = memo(({ tog }) => {
  const x = useContext(ThemeContext);
  console.log(x);
  const Styles = {
    color: x.currentTheme ? "white" : "black",
  };
  return (
    <nav className="top-bar" style={Styles}>
      {/* <button
        onClick={() => {
          x.themeToggler();
      >
        }}>
      </button> */}
      {x.currentTheme ? (
        <i
          className="fa-solid fa-cloud-sun"
          style={{ fontSize: "30px" }}
          onClick={() => {
            x.themeToggler();
          }}
        ></i>
      ) : (
        <i
          className="fa-brands fa-wpexplorer"
          style={{ fontSize: "30px" }}
          onClick={() => {
            x.themeToggler();
          }}
        ></i>
      )}

      <Link to="/storyboard" style={Styles}>
        story board
      </Link>
      <Link to="/most-viewed" style={Styles}>
        most viewed
      </Link>
      <Link to="/create-post" style={Styles}>
        Create Post
      </Link>
      <Link to="/my-view" style={Styles}>
        My Views
      </Link>
      <Link to="/login" style={Styles}>
        login
      </Link>
    </nav>
  );
});
export default SideBar;

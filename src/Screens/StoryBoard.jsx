import React, { useEffect } from "react";
import "./topBar.modules.css";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { allBlogPosts } from "./CreatePost";
import { useNavigate, useLocation } from "react-router-dom";
export default function StoryBoard() {
  // window.history.pushState(
  //   {},
  //   undefined,
  //   " http://localhost:3000/most-viewed/1"
  // );
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/storyboard", { replace: true });
  }, []);
  return (
    <div className="main-container">
      <header className="App-header">
        <SideBar />
      </header>
      <Outlet className="content-container" />
    </div>
  );
}

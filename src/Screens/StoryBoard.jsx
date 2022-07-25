import React from "react";
import "./topBar.modules.css";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { allBlogPosts } from "./CreatePost";
export default function StoryBoard() {
  return (
    <div className="main-container">
      <header className="App-header">
        <SideBar />
      </header>
      <Outlet className="content-container" />
    </div>
  );
}

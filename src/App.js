import "./App.css";
import { ThemeContext } from "./Screens/SideBar";
import { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Screens/Trending";
import Profile from "./Screens/CreatePost";
import StoryBoard from "./Screens/StoryBoard";
import Trending from "./Screens/Trending";
import CreatePost from "./Screens/CreatePost";
import MostViewed from "./Screens/MostViewed";
import MyView from "./Screens/MyView";
import { allBlogPosts } from "./Screens/CreatePost";
import SingleBlogPost from "./Screens/SingleBlogPost";
import FullPost from "./Screens/FullPost";
function App() {
  const [currentTheme, setCurrentTheme] = useState(true);

  const themeToggler = () => {
    setCurrentTheme(!currentTheme);
  };
  const contextValue = { currentTheme, themeToggler };

  const Style = {
    backgroundColor: currentTheme ? "#333" : "#ccc",
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div className="App" style={Style}>
        <Routes>
          <Route path="/" element={<StoryBoard />}>
            <Route path="/storyboard" element={<Trending />}>
              <Route path=":postName" element={<FullPost />} />;
            </Route>
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/most-viewed" element={<MostViewed />} />
            <Route path="/my-view" element={<MyView />} />
          </Route>
        </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

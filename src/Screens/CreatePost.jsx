import { useState, React, memo } from "react";
import CommonHeader from "./CommonHeader";
export const allBlogPosts = [
  {
    blogHeading: "New Blog Post",
    blogDescription:
      "To enable the user to pick a file, the first step is to add the tag to our App component. This tag should have the type attribute set as “file”. Now, we need an event handler to listen to any changes made to the file. This event handler will be triggered whenever the user selects a new file and will update the state.After storing the selected file (in the state), we are now required to send it to a server. For this purpose, we can use fetch or Axios. (In this code, we use Axios a promise-based HTTP client for the browser and NodeJS). The file is sent to the service wrapped in a FormData object.To enable the user to pick a file, the first step is to add the tag to our App component. This tag should have the type attribute set as “file”. Now, we need an event handler to listen to any changes made to the file. This event handler will be triggered whenever the user selects a new file and will update the state.After storing the selected file (in the state), we are now required to send it to a server. For this purpose, we can use fetch or Axios. (In this code, we use Axios a promise-based HTTP client for the browser and NodeJS). The file is sent to the service wrapped in a FormData object.",
    dispDate: "2022-07-27",
    selectedImage:
      "blob:http://localhost:3000/69ca3b50-95d9-46c6-8813-d03169b4f910",
  },
];
const CreatePost = memo(() => {
  const [currentPost, setCurrentPost] = useState({
    blogHeading: "",
    blogDescription: "",
    dispDate: "",
    selectedImage: "",
  });
  return (
    <div className="c-post-container">
      <CommonHeader title={"Create Post"} />
      <div>Make a post</div>
      <form className="blog-form">
        <label htmlFor="disp-date">
          <b>Post Date</b>
        </label>
        <input
          type="date"
          id="disp-date"
          name="birthday"
          onChange={(e) => {
            setCurrentPost((prev) => {
              return {
                ...prev,
                dispDate: e.target.value,
              };
            });
          }}
          value={currentPost.dispDate}
        />
        <input
          type="text"
          placeholder="Blog Post Heading"
          onChange={(e) => {
            setCurrentPost((prev) => {
              return {
                ...prev,
                blogHeading: e.target.value,
              };
            });
          }}
          value={currentPost.blogHeading}
        ></input>
        <textarea
          className="text-area"
          placeholder="please enter the content"
          onChange={(e) => {
            setCurrentPost((prev) => {
              return {
                ...prev,
                blogDescription: e.target.value,
              };
            });
          }}
          value={currentPost.blogDescription}
        />
        <input
          type="file"
          onChange={(e) => {
            setCurrentPost((prev) => {
              return {
                ...prev,
                selectedImage: URL.createObjectURL(e.target.files[0]),
              };
            });
          }}
        />
        <button
          type="submit"
          className="sub-btn"
          onClick={(e) => {
            e.preventDefault();
            if (
              currentPost.blogHeading === "" ||
              currentPost.blogDescription === "" ||
              currentPost.dispDate === ""
            ) {
              alert("please enter all fields");
              return;
            } else {
              console.log(currentPost);
              allBlogPosts.push(currentPost);
            }
            setCurrentPost({
              blogHeading: "",
              blogDescription: "",
              dispDate: "",
              selectedImage: "",
            });
          }}
        >
          submit
        </button>
      </form>
      {/* <ChildExp /> */}
    </div>
  );
});
export default CreatePost;

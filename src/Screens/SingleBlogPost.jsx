import { memo, React } from "react";

const SingleBlogPost = ({ posts, blogSelect, index }) => {
  console.log("child re-rendered");
  const Styles = {
    backgroundImage: `url(${posts.selectedImage})}`,
  };
  return (
    <div style={Styles} className="single-post">
      <h1
        className="blog-post-head"
        onClick={() => {
          blogSelect(index);
        }}
      >
        {posts.blogHeading}
      </h1>
      <p
        className="blog-post-Description"
        onClick={() => {
          blogSelect(index);
        }}
      >
        {posts.blogDescription}
      </p>
      <div className="view-icons">
        <div>
          <i className="fa-solid fa-eye"></i>
          <span
            onClick={() => {
              console.log("clicked");
            }}
          >
            {}
          </span>
        </div>
        <div>
          <i class="fa-regular fa-thumbs-up"></i> <span>{}</span>
        </div>
        <div>
          <i className="fa-solid fa-comment"></i> <span>{}</span>
        </div>
      </div>
      {/* <div className="blog-img">
        <img src={`${}`} />
      </div> */}
    </div>
  );
};

export default SingleBlogPost;

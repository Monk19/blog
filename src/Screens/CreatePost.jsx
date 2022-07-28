import { useState, React, memo, useCallback } from "react";
import CommonHeader from "./CommonHeader";
import useForm from "../CustomHooks/useForm";
import CreatableSelect from "react-select/creatable";
export const allBlogPosts = [
  {
    blogHeading: "New Blog Post",
    blogDescription:
      "To enable the user to pick a file, the first step is to add the tag to our App component. This tag should have the type attribute set as “file”. Now, we need an event handler to listen to any changes made to the file. This event handler will be triggered whenever the user selects a new file and will update the state.After storing the selected file (in the state), we are now required to send it to a server. For this purpose, we can use fetch or Axios. (In this code, we use Axios a promise-based HTTP client for the browser and NodeJS). The file is sent to the service wrapped in a FormData object.To enable the user to pick a file, the first step is to add the tag to our App component. This tag should have the type attribute set as “file”. Now, we need an event handler to listen to any changes made to the file. This event handler will be triggered whenever the user selects a new file and will update the state.After storing the selected file (in the state), we are now required to send it to a server. For this purpose, we can use fetch or Axios. (In this code, we use Axios a promise-based HTTP client for the browser and NodeJS). The file is sent to the service wrapped in a FormData object.To enable the user to pick a file, the first step is to add the tag to our App component. This tag should have the type attribute set as “file”. Now, we need an event handler to listen to any changes made to the file. This event handler will be triggered whenever the user selects a new file and will update the state.After storing the selected file (in the state), we are now required to send it to a server. For this purpose, we can use fetch or Axios. (In this code, we use Axios a promise-based HTTP client for the browser and NodeJS). The file is sent to the service wrapped in a FormData object.To enable the user to pick a file, the first step is to add the tag to our App component. This tag should have the type attribute set as “file”. Now, we need an event handler to listen to any changes made to the file. This event handler will be triggered whenever the user selects a new file and will update the state.After storing the selected file (in the state), we are now required to send it to a server. For this purpose, we can use fetch or Axios. (In this code, we use Axios a promise-based HTTP client for the browser and NodeJS). The file is sent to the service wrapped in a FormData object.To enable the user to pick a file, the first step is to add the tag to our App component. This tag should have the type attribute set as “file”. Now, we need an event handler to listen to any changes made to the file. This event handler will be triggered whenever the user selects a new file and will update the state.After storing the selected file (in the state), we are now required to send it to a server. For this purpose, we can use fetch or Axios. (In this code, we use Axios a promise-based HTTP client for the browser and NodeJS). The file is sent to the service wrapped in a FormData object.To enable the user to pick a file, the first step is to add the tag to our App component. This tag should have the type attribute set as “file”. Now, we need an event handler to listen to any changes made to the file. This event handler will be triggered whenever the user selects a new file and will update the state.After storing the selected file (in the state), we are now required to send it to a server. For this purpose, we can use fetch or Axios. (In this code, we use Axios ",
    dispDate: "2022-07-27",
    selectedImage:
      "blob:http://localhost:3000/69ca3b50-95d9-46c6-8813-d03169b4f910",
    gener: ["comdey", "Rom-com", "sit-com"],
  },
  {
    blogHeading: "The Lottery",
    blogDescription: `The morning of June 27th was clear and sunny, with the fresh warmth of a full-summer day; the flowers were blossoming profusely and the grass was richly green. The people of the village began to gather in the square, between the post office and the bank, around ten o’clock; in some towns there were so many people that the lottery took two days and had to be started on June 26th, but in this village, where there were only about three hundred people, the whole lottery took only about two hours, so it could begin at ten o’clock in the morning and still be through in time to allow the villagers to get home for noon dinner.

The children assembled first, of course. School was recently over for the summer, and the feeling of liberty sat uneasily on most of them; they tended to gather together quietly for a while before they broke into boisterous play, and their talk was still of the classroom and the teacher, of books and reprimands. Bobby Martin had already stuffed his pockets full of stones, and the other boys soon followed his example, selecting the smoothest and roundest stones; Bobby and Harry Jones and Dickie Delacroix—the villagers pronounced this name “Dellacroy”—eventually made a great pile of stones in one corner of the square and guarded it against the raids of the other boys. The girls stood aside, talking among themselves, looking over their shoulders at the boys, and the very small children rolled in the dust or clung to the hands of their older brothers or sisters.

Soon the men began to gather, surveying their own children, speaking of planting and rain, tractors and taxes. They stood together, away from the pile of stones in the corner, and their jokes were quiet and they smiled rather than laughed. The women, wearing faded house dresses and sweaters, came shortly after their menfolk. They greeted one another and exchanged bits of gossip as they went to join their husbands. Soon the women, standing by their husbands, began to call to their children, and the children came reluctantly, having to be called four or five times. Bobby Martin ducked under his mother’s grasping hand and ran, laughing, back to the pile of stones. His father spoke up sharply, and Bobby came quickly and took his place between his father and his oldest brother.

The lottery was conducted—as were the square dances, the teen-age club, the Halloween program—by Mr. Summers, who had time and energy to devote to civic activities. He was a round-faced, jovial man and he ran the coal business, and people were sorry for him, because he had no children and his wife was a scold. When he arrived in the square, carrying the black wooden box, there was a murmur of conversation among the villagers, and he waved and called, “Little late today, folks.” The postmaster, Mr. Graves, followed him, carrying a three-legged stool, and the stool was put in the center of the square and Mr. Summers set the black box down on it. The villagers kept their distance, leaving a space between themselves and the stool, and when Mr. Summers said, “Some of you fellows want to give me a hand?,” there was a hesitation before two men, Mr. Martin and his oldest son, Baxter, came forward to hold the box steady on the stool while Mr. Summers stirred up the papers inside it.

The original paraphernalia for the lottery had been lost long ago, and the black box now resting on the stool had been put into use even before Old Man Warner, the oldest man in town, was born. Mr. Summers spoke frequently to the villagers about making a new box, but no one liked to upset even as much tradition as was represented by the black box. There was a story that the present box had been made with some pieces of the box that had preceded it, the one that had been constructed when the first people settled down to make a village here. Every year, after the lottery, Mr. Summers began talking again about a new box, but every year the subject was allowed to fade off without anything’s being done. The black box grew shabbier each year; by now it was no longer completely black but splintered badly along one side to show the original wood color, and in some places faded or stained.

Mr. Martin and his oldest son, Baxter, held the black box securely on the stool until Mr. Summers had stirred the papers thoroughly with his hand. Because so much of the ritual had been forgotten or discarded, Mr. Summers had been successful in having slips of paper substituted for the chips of wood that had been used for generations. Chips of wood, Mr. Summers had argued, had been all very well when the village was tiny, but now that the population was more than three hundred and likely to keep on growing, it was necessary to use something that would fit more easily into the black box. The night before the lottery, Mr. Summers and Mr. Graves made up the slips of paper and put them into the box, and it was then taken to the safe of Mr. Summers’ coal company and locked up until Mr. Summers was ready to take it to the square next morning. The rest of the year, the box was put away, sometimes one place, sometimes another; it had spent one year in Mr. Graves’ barn and another year underfoot in the post office, and sometimes it was set on a shelf in the Martin grocery and left there.

There was a great deal of fussing to be done before Mr. Summers declared the lottery open. There were the lists to make up—of heads of families, heads of households in each family, members of each household in each family. There was the proper swearing-in of Mr. Summers by the postmaster, as the official of the lottery; at one time, some people remembered, there had been a recital of some sort, performed by the official of the lottery, a perfunctory, tuneless chant that had been rattled off duly each year; some people believed that the official of the lottery used to stand just so when he said or sang it, others believed that he was supposed to walk among the people, but years and years ago this part of the ritual had been allowed to lapse. There had been, also, a ritual salute, which the official of the lottery had had to use in addressing each person who came up to draw from the box, but this also had changed with time, until now it was felt necessary only for the official to speak to each person approaching. Mr. Summers was very good at all this; in his clean white shirt and blue jeans, with one hand resting carelessly on the black box, he seemed very proper and important as he talked interminably to Mr. Graves and the Martins.

Just as Mr. Summers finally left off talking and turned to the assembled villagers, Mrs. Hutchinson came hurriedly along the path to the square, her sweater thrown over her shoulders, and slid into place in the back of the crowd. “Clean forgot what day it was,” she said to Mrs. Delacroix, who stood next to her, and they both laughed softly. “Thought my old man was out back stacking wood,” Mrs. Hutchinson went on, “and then I looked out the window and the kids was gone, and then I remembered it was the twenty-seventh and came a-running.” She dried her hands on her apron, and Mrs. Delacroix said, “You’re in time, though. They’re still talking away up there.”

Mrs. Hutchinson craned her neck to see through the crowd and found her husband and children standing near the front. She tapped Mrs. Delacroix on the arm as a farewell and began to make her way through the crowd. The people separated good-humoredly to let her through; two or three people said, in voices just loud enough to be heard across the crowd, “Here comes your Mrs., Hutchinson,” and “Bill, she made it after all.” Mrs. Hutchinson reached her husband, and Mr. Summers, who had been waiting, said cheerfully, “Thought we were going to have to get on without you, Tessie.” Mrs. Hutchinson said, grinning, “Wouldn’t have me leave m’dishes in the sink, now, would you, Joe?,” and soft laughter ran through the crowd as the people stirred back into position after Mrs. Hutchinson’s arrival.

“Well, now,” Mr. Summers said soberly, “guess we better get started, get this over with, so’s we can go back to work. Anybody ain’t here?`,
    dispDate: "2022-07-27",
    selectedImage:
      "blob:http://localhost:3000/69ca3b50-95d9-46c6-8813-d03169b4f910",
    gener: ["x", "comdey", "Rom-com", "sit-com"],
  },
];
const CreatePost = memo(() => {
  const [options, setOptions] = useState([
    { value: "Thriller", label: "Thriller" },
    { value: "scifi", label: "scifi" },
    { value: "Advanture", label: "Adventure" },
    { value: "Comedy", label: "Comedy" },
  ]);
  const [value, setValue] = useState([]);
  const [currentPost, setCurrentPost] = useState({
    blogHeading: "",
    blogDescription: "",
    dispDate: "",
    selectedImage: "",
    authorName: "",
    gener: [],
  });
  const handleOption = (inputVal) => {
    setValue(inputVal);
  };
  const handleCreate = (inputval) => {
    const newValue = { value: inputval.toLowerCase(), label: inputval };
    setOptions((prev) => [...prev, newValue]);
    setValue([...value, newValue]);
  };

  const formSubmited = () => {
    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
  };
  const { values, errors, handleChange, handleSubmit } = useForm(formSubmited);
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
          name="dispDate"
          onChange={(e) => {
            handleChange(e);
          }}
          value={values.dispDate}
        />
        <label htmlFor="blogHeading">
          <b>Blog Heading</b>
        </label>
        <input
          name="blogHeading"
          type="text"
          placeholder="Blog Post Heading"
          onChange={(e) => {
            handleChange(e);
          }}
          value={values.blogHeading}
        ></input>
        <label htmlFor="blogDescription">
          <b>Blog Description</b>
        </label>
        <textarea
          name="blogDescription"
          className="blogDescription"
          placeholder="please enter the content"
          onChange={(e) => {
            handleChange(e);
          }}
          value={values.blogDescription}
        />
        <CreatableSelect
          isMulti
          isClearable
          value={value}
          onChange={handleOption}
          onCreateOption={handleCreate}
          options={options}
          styles={{ backgroundColor: "black" }}
        />
        <label htmlFor="authorName">
          <b>Author</b>
        </label>

        <input
          name="authorName"
          type="text"
          placeholder="Author Name"
          onChange={(e) => {
            handleChange(e);
          }}
          value={values.autherName}
        />
        <label htmlFor="selectedImage">
          <b>Select a background image</b>
          {/* <i class="fa fa-2x fa-camera"></i> */}
          <input
            type="file"
            name="selectedImage"
            onChange={(e) => {
              handleChange(e);
            }}
            aria-label="File browser example"
          />
        </label>
        <button
          type="submit"
          className="sub-btn"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(e);
            if (
              Object.keys(errors).length === 0 &&
              Object.keys(values).length !== 0 &&
              Object.keys(values).length === 5
            ) {
              const catArray = [];
              for (const x of value) {
                catArray.push(x.value);
              }
              setCurrentPost({
                ...values,
                gener: catArray,
              });
              allBlogPosts.push({
                ...values,
                gener: catArray,
              });
              console.log(allBlogPosts);
            }
            // if (
            //   currentPost.blogHeading === "" ||
            //   currentPost.blogDescription === "" ||
            //   currentPost.dispDate === ""
            // ) {
            //   alert("please enter all fields");
            //   return;
            // } else {
            //   console.log(currentPost);
            //   allBlogPosts.push(currentPost);
            // }
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

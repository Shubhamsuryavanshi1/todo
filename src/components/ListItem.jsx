import { useState } from "react";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { BsFillHandThumbsDownFill } from "react-icons/bs";
import classes from "./ListItem.module.css";

const ListItem = (props) => {
  const [likeCount, setLikeCount] = useState(props.like);
  const [dislikeCount, setDislikeCount] = useState(props.dislike);
  const [activeBtn, setActiveBtn] = useState("none");
  const handleLikeClick = () => {
    if (activeBtn === "none") {
      setLikeCount(likeCount + 1);
      setActiveBtn("like");
      return;
    }

    if (activeBtn === "like") {
      setLikeCount(likeCount - 1);
      setActiveBtn("none");
      return;
    }

    if (activeBtn === "dislike") {
      setLikeCount(likeCount + 1);
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("like");
    }
  };
  const handleDisikeClick = () => {
    if (activeBtn === "none") {
      setDislikeCount(dislikeCount + 1);
      setActiveBtn("dislike");
      return;
    }

    if (activeBtn === "dislike") {
      setDislikeCount(dislikeCount - 1);
      setActiveBtn("none");
      return;
    }

    if (activeBtn === "like") {
      setDislikeCount(dislikeCount + 1);
      setLikeCount(likeCount - 1);
      setActiveBtn("dislike");
    }
  };

  // const likeHandler = () =>{

  //         if(active === "none" || "dislike"){
  //             setLike((prevLike) => {
  //             prevLike+1
  //             setDislike((prevDislike) => prevDislike - 1)
  //             setActive("like")

  //             })
  //         }
  //     }
  // const dislikeHandler = () =>{
  //     if(active === "none" || "like"){
  //         setDislike((prevDislike) => prevDislike + 1)
  //         setLike((prevLike) => prevLike-1)
  //         setActive("dislike")
  //     }

  // }
  return (
    <li className={classes.listitem}>
      <div className={classes.btndiv}>
        <button onClick={handleLikeClick} className={classes.like}>
          <BsFillHandThumbsUpFill />
          {likeCount}
        </button>
        <button onClick={handleDisikeClick} className={classes.dislike}>
          <BsFillHandThumbsDownFill />
          {dislikeCount}
        </button>
      </div>

      <h3>{props.text}</h3>
    </li>
  );
};

export default ListItem;

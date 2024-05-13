import { AiFillHeart } from "react-icons/ai";
import styles from "./BookCard.module.css";

import {useState} from "react";



function BookCard({ data,likedListHandler }) {

const{ title, author, image, pages, language } = data;
  const[like, setlike] = useState(false);


  const likeHandler = () =>{
    likedListHandler(data,like)
    setlike(like => !like)
  }

   
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
      <div>
        <span>{language}</span>
        <span>{pages} pages</span>
      </div>
      <button onClick={likeHandler}>
        <AiFillHeart color={like ? "red" : "white"} fontSize="1.3rem" />
      </button>
    </div>
  );
}

export default BookCard;

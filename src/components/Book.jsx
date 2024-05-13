import { books } from "../constants/mockData";
import BookCard from "./BookCard";
import { useState } from "react";
import styles from "./Book.module.css"
import SideCard from "./SideCard";

function Book() {
  const [liked, setLiked] = useState([]);

  const likedListHandler = (book, status) => {
    console.log(book, status);
    if (status) {
      const newLiked = liked.filter((i) => i.id !== book.id);
      setLiked(newLiked);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };
  return (
    <div className= {styles.container}>
      <div className={styles.crads}>
        {books.map((book) => (
          <BookCard
            key={book.id}
            data={book}
            likedListHandler={likedListHandler}
          />
        ))}
      </div>
      {!!liked.length && (
        <div className={styles.favorite}>
          {liked.map((book ) => (
         <SideCard key ={book.id} book ={book}/>
          ))}
        </div>
      )}
    </div>
  );
}

export default Book;

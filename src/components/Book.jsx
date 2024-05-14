import { books  as dataBook} from "../constants/mockData";
import BookCard from "./BookCard";
import { useState } from "react";
import styles from "./Book.module.css";
import SideCard from "./SideCard";

import Search from "./Search";

function Book() {
  const [books, setBooks]= useState(dataBook);
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState([]);

 


  const likedListHandler = (book, status) => {
    console.log(book, status);
    if (status) {
      const newLiked = liked.filter((i) => i.id !== book.id);
      setLiked(newLiked);
    } else {
      setLiked((liked) => [...liked, book]);
    };
    
    const searchHandler= () => {
      if (search){
        const newBooks = dataBook.filter (book => book.title.toLowerCase().includes(search));
        setBooks(newBooks)
      }else{
        setBooks(dataBook)
      }
     }
    

  };
  return ( 
    <>
     <Search search={search} setSearch ={setSearch} searchHandler={searchHandler}/>
      <div className={styles.container}>
        <div className={styles.cards}>
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
            <h4>Favorite</h4>
            {liked.map((book) => (
              <SideCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Book;

import React from 'react';
import styles from "./SideCard.module.css";


function SideCard({book}) {
  return (
     <div  className={styles.card}>
    <h4>Favorite</h4>
    <img src={book.image} alt={book.title} />
    <p>{book.title}</p>
  </div>
  )
}

export default SideCard
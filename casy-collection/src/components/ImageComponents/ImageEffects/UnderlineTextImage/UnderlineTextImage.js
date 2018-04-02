import React from 'react';
import styles from './UnderlineTextImage.css';

const UnderlineTextImage = props => {
  return (
    <div className={styles.imageContainer}>
      <h2 className={styles.text}>{props.category.title}</h2>
      <a href="/">
        <img
          className={styles.image}
          src={props.category.src}
          alt={props.category.alt}
        />
      </a>
    </div>
  );
};

export default UnderlineTextImage;

{
  /* <div className={`${styles.imageGalleryPicture} ${props.large}`}>
  <h2 className={styles.imageGalleryTitle}>{props.category.title}</h2>
  <a href="/">
    <img src={props.category.src} alt={props.category.alt} />
  </a>
</div>; */
}

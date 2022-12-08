// Importing Libraries
import Image from "next/image";
import React from "react";

// Importing styles
import styles from "./Content.module.scss";

// Importing assets
import Mobile from "assets/Mobile.png";

const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src={Mobile} alt="mobile" height={550} width={500} />
      </div>
      <div className={styles.right}>
        <h1 className={styles.Heading}>
          Focused on <br /> Time Saving
        </h1>
        <p className={styles.subHeading}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni id
          fugit non ab error commodi magnam exercitationem tempora ipsum
          quisquam, voluptas, minus quaerat sit numquam sunt libero omnis
          aperiam ex.fugit non ab error commodi magnam exercitationem tempora
          ipsum quisquam, voluptas, minus quaerat sit numquam sunt libero omnis
          aperiam ex.
        </p>
        <button className={styles.app}>Download the mobile app</button>
      </div>
    </div>
  );
};

export default Content;

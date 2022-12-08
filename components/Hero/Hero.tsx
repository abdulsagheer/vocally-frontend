/* eslint-disable react-hooks/exhaustive-deps */
// Importing Libraries
import Image from "next/image";
import React, { FormEvent, useState } from "react";
import { GrFacebookOption } from "react-icons/gr";
import { GrYoutube } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme, useMediaQuery } from "@mui/material";
import { Form } from "../../interfaces/form";

// Importing Utils
import { api } from "../../utils/api";

// Importing styles
import styles from "./Hero.module.scss";

// Importing assets
import HeroImage from "assets/Hero.png";
import Auto from "assets/Auto.png";
import heroMobile from "assets/MobileHero.png";

const Hero = () => {
  const theme = useTheme();
  const hero = useMediaQuery(theme.breakpoints.down("sm"));

  const [userData, setUserData] = useState<Form>({ name: "", email: "" });

  console.log("userData", userData);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!(userData.name.length > 0 && userData.email.length > 0)) {
      toast.error(`Please enter your name and email`);
    }
    const { data } = await api.createContact(userData);
    if (userData.name.length > 0 && userData.email.length > 0) {
      toast.success(
        "Your information has been recorded successfully, We will get back to you soon!"
      );
    }
    console.log(data);
    setUserData({ name: "", email: "" });
  };

  return (
    <>
      <ToastContainer />
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h1 className={styles.Heading}>
            Vehicle Maintenance From The Comfort of Your Home
          </h1>
          <p className={styles.subHeading}>
            Open Auto Soothes the hassle of maintaining your vehicle and helps
            you deal with unexpected repairs worry-free.
          </p>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              value={userData?.name || ""}
              onChange={handleInputChange}
              placeholder="Enter Your Name"
            />
            <input
              type="email"
              name="email"
              value={userData?.email || ""}
              onChange={handleInputChange}
              placeholder="Enter Your Email"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className={styles.right}>
          {hero ? (
            <Image src={heroMobile} alt="hero" height={250} width={320} />
          ) : (
            <Image src={HeroImage} alt="hero" height={450} width={750} />
          )}
        </div>
      </div>
      {!hero ? (
        <div className={styles.auto}>
          <Image src={Auto} alt="auto" width={50} height={50} />
        </div>
      ) : null}
      <div className={styles.socials}>
        <a href="https://www.facebook.com/" target="blank">
          <GrFacebookOption />
        </a>
        <a href="https://www.twitter.com/" target="blank">
          <AiOutlineTwitter />
        </a>
        <a href="https://www.youtube.com/" target="blank">
          <GrYoutube />
        </a>
        <a href="https://www.linkedin.com/" target="blank">
          <GrLinkedin />
        </a>
        <a href="https://www.instagram.com/" target="blank">
          <AiOutlineInstagram />
        </a>
      </div>
    </>
  );
};

export default Hero;

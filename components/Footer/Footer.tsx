// Importing Libraries
import Image from "next/image";
import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { GrFacebookOption } from "react-icons/gr";
import { GrYoutube } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { useTheme, useMediaQuery } from "@mui/material";

// Importing styles
import styles from "./Footer.module.scss";

// Importing assets
import Logo from "assets/Logo.png";

const Footer = () => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <Image src={Logo} alt="logo" height={40} width={160} />
          {!mobile ? <p>Open Auto @ all rights reserved</p> : null}
        </div>
        <div className={styles.right}>
          <div className={styles.phone}>
            <span>
              <BsTelephoneFill />
            </span>

            <a href="tel: +7695864558">+7695864558</a>
          </div>
          <div className={styles.mail}>
            <span>
              <GrMail />
            </span>
            <a href="mailto: service@openauto.ca">service@openauto.ca</a>
          </div>
        </div>
      </div>
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
    </footer>
  );
};

export default Footer;

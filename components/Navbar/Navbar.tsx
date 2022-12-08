// Importing Libraries
import Image from "next/image";
import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { useTheme, useMediaQuery } from "@mui/material";
// Importing styles
import styles from "./Navbar.module.scss";

// Importing assets
import Logo from "assets/Logo.png";
import Link from "next/link";

const Navbar = () => {
  const theme = useTheme();
  const navbar = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/" className={styles.logo}>
          <Image src={Logo} alt="logo" height={40} width={160} />
        </Link>
      </div>
      {!navbar && (
        <div className={styles.navItems}>
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
          <button className={styles.app}>Download the mobile app</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

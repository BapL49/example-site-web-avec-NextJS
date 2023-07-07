"use client";

import Image from "next/image";
import Logo from "../public/logo/logo_typo_right.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Styles from "../styles/header.module.css";
import { comfortaa } from "@/app/font";
import SecondaryButton from "./buttons/secondaryButton";
import { useState } from "react";

import { motion } from "framer-motion";

export default function Header() {
  const pathname = usePathname();

  const [responsive, setResponsive] = useState(false);

  const burgerMenuState = () => {
    setResponsive(!responsive);
  };

  return (
    <motion.header
      id={Styles.header}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
    >
      <Link href="/">
        <Image
          id={Styles.logo}
          src={Logo}
          placeholder="blur"
          loading="lazy"
          alt="logo Brushed"

          width={146}
          objectFit="cover"
        />
      </Link>

      <motion.nav
        id={responsive === true ? Styles.nav_active : Styles.nav}
        className={comfortaa.variable}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", delay: 0.5, duration: 0.5 }}
      >
        <Link
          href="/about"
          id={Styles.link}
          className={pathname == "/about" ? Styles.link_active : ""}
          style={responsive === true ? { display: "inline" } : null}
          onClick={() => setResponsive(false)}
        >
          What's Brushed ?
        </Link>
        <Link
          href="/designs"
          id={Styles.link}
          className={pathname == "/designs" ? Styles.link_active : ""}
          style={responsive === true ? { display: "inline" } : null}
          onClick={() => setResponsive(false)}
        >
          Discover some design
        </Link>
        <SecondaryButton
          href="/supportUs"
          text="support us"
          style={responsive === true ? { display: "inline" } : null}
          onClick={() => setResponsive(false)}
        />
        <div
          className={Styles.container_burger}
          id={responsive === true ? Styles.container_burger_active : ""}
          onClick={burgerMenuState}
        >
          <span
            className={Styles.burger}
            id={responsive === true ? Styles.burger_top : ""}
          ></span>
          <span
            className={Styles.burger}
            id={responsive === true ? Styles.burger_middle : ""}
          ></span>
          <span
            className={Styles.burger}
            id={responsive === true ? Styles.burger_bottom : ""}
          ></span>
        </div>
      </motion.nav>
    </motion.header>
  );
}

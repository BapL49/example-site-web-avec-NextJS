"use client";

import PrimaryButton from "@/components/buttons/primaryButton";

import Styles from "../styles/index.module.css";
import { archivoBlack, comfortaa } from "./font";
import Image from "next/image";

import Top from "../public/images/Infinite_Portals.jpeg";
import Middle from "../public/images/the_way.jpg";
import Behind from "../public/images/tunnel.jpeg";

import { motion } from "framer-motion";

export default function Index() {
  return (
    <section id={Styles.container}>
      <div id={Styles.container_left}>
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className={archivoBlack.variable}
          id={Styles.h1}
        >
          improve your{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.8 }}
            id={Styles.span_h1}
          >
            style
          </motion.span>
        </motion.h1>
        <motion.h2 className={comfortaa.variable} id={Styles.h2}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3}}
        >
          Why settle for boring wall art when you can have a{" "}
          <span className={Styles.span_h2}>modern</span> and{" "}
          <span className={Styles.span_h2}>unique</span> metal poster ?
        </motion.h2>
        <PrimaryButton href="/about" text="get more info" />
      </div>

      <motion.div
        id={Styles.div_pictures}
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }}
      >
        <Image
          src={Top}
          alt="picture of a poster design"
          placeholder="blur"
          loading="lazy"
          id={Styles.picture_top}
        />

        <Image
          src={Middle}
          alt="picture of a poster design"
          placeholder="blur"
          loading="lazy"
          id={Styles.picture_middle}
        />

        <Image
          src={Behind}
          alt="picture of a poster design"
          placeholder="blur"
          loading="lazy"
          id={Styles.picture_behind}
        />
      </motion.div>
    </section>
  );
}

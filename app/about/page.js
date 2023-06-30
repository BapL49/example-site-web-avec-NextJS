"use client"

import Styles from '../../styles/about.module.css'
import { archivoBlack, sen } from '../font'

import { Player } from '@lottiefiles/react-lottie-player'

import { motion } from 'framer-motion'

export default function About() {

    return (
        <section id={Styles.container} className={sen.variable}>
            <motion.article id={Styles.div_top}
                initial= {{ x: -400, opacity: 0}}
                animate={{ x: 0, opacity: 1}}
                transition={{ ease: "easeInOut", duration: 0.8}}
                whileHover={{ scale: 1.05}}
            >
                <Player 
                    autoplay
                    loop
                    src="https://assets2.lottiefiles.com/packages/lf20_5kixer4y.json"
                    id={Styles.french_flag}
                />

                <h1 id={Styles.h1}>Brushed is a French company founded by two friends who love modern art and cool designs.</h1>
            </motion.article>
            
            <motion.div id={Styles.div_bottom}
                initial={{ y: 200, opacity: 0}}
                animate={{ y: 0, opacity: 1}}
                transition={{ ease: "easeInOut", duration: 0.5, delay: 0.6}}
            >
                <motion.article className={Styles.informations}
                    whileHover={{ scale: 1.1}}
                    transition={{ ease: "easeInOut", duration: 0.3}}
                >
                    <Player 
                        autoplay
                        loop
                        src="https://assets5.lottiefiles.com/private_files/lf30_zovnor9s.json"
                        className={Styles.lottie_animations}
                    />
                    <h2 className={Styles.text_informations}>Free delivery on all purchases</h2>
                </motion.article>

                <motion.article className={Styles.informations}
                    whileHover={{ scale: 1.1}}
                    transition={{ ease: "easeInOut", duration: 0.3}}
                >
                    <Player 
                        autoplay
                        loop
                        src="https://assets5.lottiefiles.com/packages/lf20_ijxwkfza.json"
                        className={Styles.lottie_animations}
                    />
                    <h3 className={Styles.text_informations}>UV and shock resistant</h3>
                </motion.article>


                <motion.article className={Styles.informations}
                    whileHover={{ scale: 1.1}}
                    transition={{ ease: "easeInOut", duration: 0.3}}
                >
                    <span className={archivoBlack.variable} id={Styles.span}>limited edition</span>
                    <h3 className={Styles.text_informations}>All our posters are limited to 500 copies</h3>
                </motion.article>
            </motion.div>
        </section>

    )
}
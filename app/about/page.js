"use client"

import Styles from '../../styles/about.module.css'
import { archivoBlack, sen } from '../font'

import { Player } from '@lottiefiles/react-lottie-player'

export default function About() {

    return (
        <section id={Styles.container} className={sen.variable}>
            <div id={Styles.div_top}>
                <Player 
                    autoplay
                    loop
                    src="https://assets2.lottiefiles.com/packages/lf20_5kixer4y.json"
                    id={Styles.french_flag}
                />

                <h1 id={Styles.h1}>Brushed is a French company founded by two friends who love modern art and cool designs.</h1>
            </div>
            
            <div id={Styles.div_bottom}>
                <div className={Styles.informations}>
                    <Player 
                        autoplay
                        loop
                        src="https://assets5.lottiefiles.com/private_files/lf30_zovnor9s.json"
                        className={Styles.lottie_animations}
                    />
                    <h2 className={Styles.text_informations}>Free delivery on all purchases</h2>
                </div>

                <div className={Styles.informations}>
                    <Player 
                        autoplay
                        loop
                        src="https://assets5.lottiefiles.com/packages/lf20_ijxwkfza.json"
                        className={Styles.lottie_animations}
                    />
                    <h3 className={Styles.text_informations}>UV and shock resistant</h3>
                </div>


                <div className={Styles.informations}>
                    <span className={archivoBlack.variable} id={Styles.span}>limited edition</span>
                    <h3 className={Styles.text_informations}>All our posters are limited to 500 copies</h3>
                </div>
            </div>
        </section>

    )
}
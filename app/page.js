import PrimaryButton from "@/components/buttons/primaryButton";

import Styles from '../styles/index.module.css'
import { archivoBlack, comfortaa } from "./font";
import Image from "next/image";

import Top from '../public/images/Infinite_Portals.jpeg'
import Middle from '../public/images/the_way.jpg'
import Behind from '../public/images/tunnel.jpeg'


export default function Index() {

    return (
        <section id={Styles.container}>
            <div  id={Styles.container_left}>
                <h1 className={archivoBlack.variable} id={Styles.h1}>improve your <span id={Styles.span_h1}>style</span></h1>
                <h2 className={comfortaa.variable} id={Styles.h2}>Why settle for boring wall art when you can have a <span className={Styles.span_h2}>modern</span> and <span className={Styles.span_h2}>unique</span> metal poster ?</h2>
                <PrimaryButton href="/about" text="get more info"/>
            </div>



            <div id={Styles.div_pictures}>
                <Image 
                    src={Top}
                    alt="picture of a poster design"
                    placeholder='blur'
                    loading="lazy"
                    id={Styles.picture_top}
                />

                <Image 
                    src={Middle}
                    alt="picture of a poster design"
                    placeholder='blur'
                    loading="lazy"
                    id={Styles.picture_middle}
                />

                <Image 
                    src={Behind}
                    alt="picture of a poster design"
                    placeholder='blur'
                    loading="lazy"
                    id={Styles.picture_behind}
                />

            </div>


        </section>
        
        

    )
}
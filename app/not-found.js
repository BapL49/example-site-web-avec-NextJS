"use client"

import { Player } from "@lottiefiles/react-lottie-player";

import Styles from '../styles/notFound.module.css';
import PrimaryButton from "@/components/buttons/primaryButton";

export default function NotFound() {

    
    return (
        <div id={Styles.container}>
            <Player 
                autoplay
                loop
                src="https://assets9.lottiefiles.com/packages/lf20_j3gumpgp.json"
                id={Styles.animation}
            />

            <PrimaryButton href="/" text=" return Home" />
        </div>
    )

}
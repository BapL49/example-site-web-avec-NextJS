import Link from "next/link";

import Styles from '../../styles/secondaryButton.module.css'
import { comfortaa } from "@/app/font";

export default function SecondaryButton(props) {
    return (
        
        <Link href={props.href} className={comfortaa.variable} id={Styles.button} style={props.style}>{props.text}</Link>
    )

}
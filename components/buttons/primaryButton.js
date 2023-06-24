import Link from "next/link";

import Styles from '../../styles/primaryButton.module.css'
import { comfortaa } from "@/app/font";

export default function PrimaryButton(props) {
    return (
        
        <Link href={props.href} className={comfortaa.variable} id={Styles.button}>{props.text}</Link>
    )

}
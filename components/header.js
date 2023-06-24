'use client'

import Image from "next/image"
import Logo from '../public/logo/logo_typo_right.png'
import Link from "next/link"
import { useRouter } from "next/navigation"

import Styles from '../styles/header.module.css'
import { comfortaa } from "@/app/font"
import SecondaryButton from "./buttons/secondaryButton"




export default function Header() {

    const router = useRouter();
    const style = {textDecoration: "underline"}

    return (
        <header id={Styles.header}>
            <Link href="/"><Image id={Styles.logo}
                src={Logo}
                placeholder="blur"
                loading="lazy"
                alt="logo Brushed"
            /></Link>

            <nav id={Styles.nav} className={comfortaa.variable}>
                <Link href="/about" id={Styles.link} styles={router.pathname === "/about" ? style : ""} >What's Brushed ?</Link>
                <SecondaryButton href="/supportUs" text="support us" />
            </nav>
        </header>
    )
}
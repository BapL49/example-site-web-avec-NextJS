'use client'

import Image from "next/image"
import Logo from '../public/logo/logo_typo_right.png'
import Link from "next/link"
import { usePathname } from "next/navigation"

import Styles from '../styles/header.module.css'
import { comfortaa } from "@/app/font"
import SecondaryButton from "./buttons/secondaryButton"
import { useState } from "react"




export default function Header() {

    const pathname = usePathname();

    const [responsive, setResponsive] = useState(false);

    const burgerMenuState = () => {
        setResponsive(!responsive)
    }

    return (
        <header id={Styles.header}>
            <Link href="/"><Image id={Styles.logo}
                src={Logo}
                placeholder="blur"
                loading="lazy"
                alt="logo Brushed"
            /></Link>

            <nav id={responsive === true ? Styles.nav_active : Styles.nav} className={comfortaa.variable} onClick={burgerMenuState}>
                <Link href='/about' id={Styles.link} className={pathname == "/about" ? Styles.link_active : ""} style={responsive == true ? {display: "inline"} : null} >What's Brushed ?</Link>
                <Link href='/designs' id={Styles.link} className={pathname == "/designs" ? Styles.link_active : ""} style={responsive == true ? {display: "inline"} : null} >Discover some design</Link>
                <SecondaryButton href="/supportUs" text="support us" style={responsive == true ? {display: "inline"} : null} />
                <div className={Styles.container_burger} id={responsive === true ? Styles.container_burger_active : ""} onClick={burgerMenuState}>
                    <span className={Styles.burger} id={responsive === true ? Styles.burger_top : ""}></span>
                    <span className={Styles.burger} id={responsive === true ? Styles.burger_middle : ""}></span>
                    <span className={Styles.burger} id={responsive === true ? Styles.burger_bottom : ""}></span>
                </div>
            </nav>
        </header>
    )
}
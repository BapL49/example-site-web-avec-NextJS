'use client'

import Image from "next/image"
import Logo from '../public/logo/logo_typo_right.png'
import Link from "next/link"
import { usePathname } from "next/navigation"

import Styles from '../styles/header.module.css'
import { comfortaa } from "@/app/font"
import SecondaryButton from "./buttons/secondaryButton"




export default function Header() {

    const pathname = usePathname();


    return (
        <header id={Styles.header}>
            <Link href="/"><Image id={Styles.logo}
                src={Logo}
                placeholder="blur"
                loading="lazy"
                alt="logo Brushed"
            /></Link>

            <nav id={Styles.nav} className={comfortaa.variable}>
                <Link href='/about' id={Styles.link} className={pathname == "/about" ? Styles.link_active : ""} >What's Brushed ?</Link>
                <Link href='/designs' id={Styles.link} className={pathname == "/designs" ? Styles.link_active : ""} >Discover some design</Link>
                <SecondaryButton href="/supportUs" text="support us" />
            </nav>
        </header>
    )
}
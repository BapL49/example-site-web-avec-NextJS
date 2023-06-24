"use client"

import Link from 'next/link'
import Styles from '../styles/footer.module.css'
import { archivoBlack, sen } from '@/app/font'
import { useRouter } from 'next/navigation'

export default function Footer() {

    const router = useRouter();

    return (
        <footer id={Styles.footer}>
            <div className={sen.variable} id={Styles.div_social_network}>
                <Link href="https://www.instagram.com/brushedarts/" target="_blank" className={Styles.link_social_network}>Tnstagram</Link>
                <Link href="https://twitter.com/BrushedCompany" target="_blank" className={Styles.link_social_network}>Twitter</Link>
                <Link href="https://www.tiktok.com/@brushedarts" target="_blank" className={Styles.link_social_network}>TikTok</Link>
            </div>


            <nav className={archivoBlack.variable} id={Styles.nav_bottom}>
                <Link href="/" className={router.pathname === "/" ? Styles.link_page_active : Styles.link_page_not_active}>01</Link>
                <Link href="/about" className={router.pathname === "/about" ? Styles.link_page_active : Styles.link_page_not_active}>02</Link>
                <Link href="/supportUs"  className={router.pathname === "/supportUs" ? Styles.link_page_active : Styles.link_page_not_active}>03</Link>
            </nav>

        </footer>
    )

}
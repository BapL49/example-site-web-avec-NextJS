"use client"

import Link from 'next/link'
import Styles from '../styles/footer.module.css'
import { archivoBlack, sen } from '@/app/font'
import { usePathname } from 'next/navigation'

import { motion } from 'framer-motion'

export default function Footer() {


    const pathname = usePathname();


    return (
        <motion.footer id={Styles.footer}
            initial={{y: 200, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{ease: "easeInOut", duration: 0.5}}
        >
            <motion.div className={sen.variable} id={Styles.div_social_network} 
                initial={{scale: 0}}
                animate={{scale: 1}}
                transition={{ease: "easeInOut", duration: 0.5, delay: 0.5}}
            >
                <Link href="https://www.instagram.com/brushedarts/" target="_blank" className={Styles.link_social_network}>Instagram</Link>
                <Link href="https://twitter.com/BrushedCompany" target="_blank" className={Styles.link_social_network}>Twitter</Link>
                <Link href="https://www.tiktok.com/@brushedarts" target="_blank" className={Styles.link_social_network}>TikTok</Link>
            </motion.div>


            <nav className={archivoBlack.variable} id={Styles.nav_bottom}>
                <Link href="/" className={pathname === "/" ? Styles.link_page_active : Styles.link_page_not_active}>01</Link>
                <Link href="/about" className={pathname === "/about" ? Styles.link_page_active : Styles.link_page_not_active}>02</Link>
                <Link href="/designs"  className={pathname === "/designs" ? Styles.link_page_active : Styles.link_page_not_active}>03</Link>
                <Link href="/supportUs"  className={pathname === "/supportUs" ? Styles.link_page_active : Styles.link_page_not_active}>04</Link>
            </nav>

        </motion.footer>
    )

}
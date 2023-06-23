import Image from "next/image"
import Logo from '../../public/logo/logo_typo_right.png'
import Link from "next/link"

export default function Header() {

    return (
        <header>
            <Image
                src={Logo}
                placeholder="blur"
                loading="lazy"
            />

            <nav>
                <Link href={} content="What's Brushed ?" />
                    
                <Link href={} content="Support us" />  

            </nav>
        </header>
    )
}
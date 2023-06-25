"use client"
import Image from 'next/image'
import Styles from '../../styles/desings.module.css'


import image1 from '../../public/images/Infinite_Portals.jpeg'
import image2 from '../../public/images/the_way.jpg'
import image3 from '../../public/images/tunnel.jpeg'
import image4 from '../../public/images/Cliff_landscape.jpeg'
import image5 from '../../public/images/Hiking.jpeg'
import image6 from '../../public/images/Paradise_way.jpeg'
import image7 from '../../public/images/skyward.jpg'
import image8 from '../../public/images/somewhere.jpg'
import image9 from '../../public/images/teleportation.jpeg'
import image10 from '../../public/images/the_pic.jpg'


export default function Desings() {

    

    // hover effect
    const handleHover = (e) => {
        
        const THRESHOLD = 15;
        
        const { clientX, clientY, currentTarget } = e;
        const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget
    
        const horizontal = (clientX - offsetLeft) / clientWidth;
        const vertical = (clientY - offsetTop) / clientHeight;
        
        const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
        const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
        
        currentTarget.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
    }
    
    const resetStyles = (e) => {
        const { currentTarget } = e;
        currentTarget.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
    }
    
    

    return (
        <section id={Styles.container}>
                <Image 
                    src={image1}
                    alt="Desings of poster"
                    placeholder='blur'
                    loading='eager'
                    className={Styles.image}
                    onMouseMove={handleHover}
                    onMouseLeave={resetStyles}
                    
                />
                <Image 
                    src={image2}
                    alt="Desings of poster"
                    placeholder='blur'
                    loading='eager'
                    className={Styles.image}
                    onMouseMove={handleHover}
                    onMouseLeave={resetStyles}
                    
                />
                <Image 
                    src={image3}
                    alt="Desings of poster"
                    placeholder='blur'
                    loading='eager'
                    className={Styles.image}
                    onMouseMove={handleHover}
                    onMouseLeave={resetStyles}
                    
                />
                <Image 
                    src={image4}
                    alt="Desings of poster"
                    placeholder='blur'
                    loading='eager'
                    className={Styles.image}
                    onMouseMove={handleHover}
                    onMouseLeave={resetStyles}
                    
                />
                <Image 
                    src={image5}
                    alt="Desings of poster"
                    placeholder='blur'
                    loading='eager'
                    className={Styles.image}
                    onMouseMove={handleHover}
                    onMouseLeave={resetStyles}
                    
                />
                <Image 
                    src={image6}
                    alt="Desings of poster"
                    placeholder='blur'
                    loading='eager'
                    className={Styles.image}
                    onMouseMove={handleHover}
                    onMouseLeave={resetStyles}
                    
                />
                <Image 
                    src={image7}
                    alt="Desings of poster"
                    placeholder='blur'
                    loading='eager'
                    className={Styles.image}
                    onMouseMove={handleHover}
                    onMouseLeave={resetStyles}
                    
                />
                <Image 
                    src={image8}
                    alt="Desings of poster"
                    placeholder='blur'
                    loading='eager'
                    className={Styles.image}
                    onMouseMove={handleHover}
                    onMouseLeave={resetStyles}
                    
                />
                <Image 
                    src={image9}
                    alt="Desings of poster"
                    placeholder='blur'
                    loading='eager'
                    className={Styles.image}
                    onMouseMove={handleHover}
                    onMouseLeave={resetStyles}
                    
                />
                <Image 
                    src={image10}
                    alt="Desings of poster"
                    placeholder='blur'
                    loading='eager'
                    className={Styles.image}
                    onMouseMove={handleHover}
                    onMouseLeave={resetStyles}
                    
                    
                />
        </section>
    )
}
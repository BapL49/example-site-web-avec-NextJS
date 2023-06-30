"use client"



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Styles from '../../styles/supportUs.module.css'
import { archivoBlack, comfortaa, sen } from '../font'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import CounterBar from '@/components/counter_bar'
import { useEffect, useState } from 'react'


import { CookiesProvider } from 'react-cookie'
import { useCookies } from 'react-cookie'

import { motion } from 'framer-motion'


export default function SupportUs() {
    
    
    const [data, setData] = useState(null);
    
    useEffect(() => {
        fetch('/api/get-counter-value').then((res) => res.json()).then((data) => {
            setData(data)
        })
    }, [])
    

    //cookie to limit to 1 interactions with the button to increase the counter
    
    const [cookies, setCookie] = useCookies(['interaction']);


    const dateForCookie = new Date('2024-12-30');


    // handlers


    const onClickHandler = () => {

        fetch('/api/increment-counter').then((res) => res.json()).then((data) => {
            setCounterIncresed(true)
            setData(data)
        })
        setCookie('interaction', true, {
            path: '/',
            expires: dateForCookie,
            sameSite: true,
        });

    };



    return (
        <CookiesProvider>
            <section id={Styles.container}>
                <div className={comfortaa.variable} id={Styles.div_left}>
                    <h1 className={archivoBlack.variable} id={Styles.h1}>Unlock some <motion.span id={Styles.span_h1} initial={{opacity: 0}} animate={{opacity: 1}} transition={{ease: "easeInOut", duration: 0.7, delay: 0.5}}>good things</motion.span></h1>
                    
                    <h2  id={Styles.h2}>At each level <span className={Styles.span_h2}>reached</span> , a square with a surprise becomes available.<br/>
                    Your <span className={Styles.span_h2}>goal</span> is to reach the last square with the <span className={Styles.span_h2}>biggest surprise</span>. But be careful, you can only increase the <span className={Styles.span_h2}>counter once</span>.
                    </h2>

                    <button className={Styles.button} id={cookies['interaction'] ? Styles.button_after_increased : ""}  onClick={cookies['interaction'] ? true : onClickHandler}>{cookies['interaction'] ? "thank you for your support" : "increase the counter"}</button>
                </div>

                <div id={Styles.div_right} className={sen.variable}>
                    <motion.div id={Styles.container_article}
                        initial={{scale: 0.5, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        transition={{ ease: "easeInOut", duration: 0.5}}
                    >
                        <div className={Styles.sub_container_article}>
                            <article className={Styles.articles}>
                                
                                {data >= 500 ? <p className={Styles.text_unlocked}>Affiliate system with 15% commission available to all who wish to participate</p>
                                : 
                                <div className={Styles.articles_locked}>
                                    <FontAwesomeIcon icon={faLock} className={Styles.locker_icon}/>
                                    <p className={Styles.step_number}>500</p>
                                </div>
                                }
                                
                            </article>

                            <article className={Styles.articles}>
                                
                                {data >= 1000 ? <p className={Styles.text_unlocked}>collection of 3 metal posters per month, designed and chosen by the community (with payment to the chosen artist).</p>
                                : 
                                <div className={Styles.articles_locked}>
                                    <FontAwesomeIcon icon={faLock} className={Styles.locker_icon}/>
                                    <p className={Styles.step_number}>1000</p>
                                </div>
                                }
                                
                            </article>

                        </div>

                        <div className={Styles.sub_container_article}>
                            <article className={Styles.articles}>
                                
                                {data >= 2000 ? <p className={Styles.text_unlocked}>15% discount for one month after launch</p>
                                :   
                                <div className={Styles.articles_locked}>
                                    <FontAwesomeIcon icon={faLock} className={Styles.locker_icon}/>
                                    <p className={Styles.step_number}>2000</p>
                                </div>
                                }
                                
                            </article>

                            <article className={Styles.articles}>
                                
                                {data >= 4000 ? <p className={Styles.text_unlocked}>Check our social networks in the coming days</p>
                                : 
                                <div className={Styles.articles_locked}>
                                    <FontAwesomeIcon icon={faLock} className={Styles.locker_icon}/>
                                    <p className={Styles.step_number}>4000</p>
                                </div>
                                }
                                                        
                            </article>


                        </div>

                    </motion.div>

                    <CounterBar value={data}/>
                    
                </div>

            </section>
        </CookiesProvider>
    )
}
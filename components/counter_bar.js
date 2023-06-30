
import { useEffect, useState } from 'react';
import Styles from '../styles/counterBar.module.css'
import { archivoBlack } from '@/app/font'

import { motion } from 'framer-motion';

export default function CounterBar(props) {
    
    
    const [stepValue, setStepValue] = useState(500);
    
    useEffect(() => {
        if (stepValue < 4000) {
            if (props.value >= stepValue) {
                setStepValue(stepValue * 2)
            }
        }
    })
    
    return (
        <motion.div id={Styles.counter_bar} className={archivoBlack.variable} 
            initial={{width: 0}}
            animate={{width: 100 + '%'}}
            transition={{ease: "easeInOut", duration: 0.8, delay: 0.3}}
        >
            <div id={Styles.gradient_bar} style={{width: props.value / stepValue * 100 + '%'}}></div>
            <span className={Styles.span_counter}>{props.value}</span>
            <span className={Styles.span_counter} id={Styles.absolute}>{stepValue}</span>
        </motion.div>
    )
}
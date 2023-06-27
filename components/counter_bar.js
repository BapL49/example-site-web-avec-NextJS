
import { useEffect, useState } from 'react';
import Styles from '../styles/counterBar.module.css'
import { archivoBlack } from '@/app/font'



export default function CounterBar(props) {
    
    
    const [stepValue, setStepValue] = useState(500);
    
    
    
    return (
        <div id={Styles.counter_bar} className={archivoBlack.variable} >
            <span className={Styles.span_counter}>{props.value}</span>
            <span className={Styles.span_counter}>{stepValue}</span>
            <div id={Styles.gradient_bar} style={{width: props.value / stepValue * 43.3 + '%'}}></div>
        </div>
    )
}
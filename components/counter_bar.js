
import { useEffect, useState } from 'react';
import Styles from '../styles/counterBar.module.css'
import { archivoBlack } from '@/app/font'



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
        <div id={Styles.counter_bar} className={archivoBlack.variable} >
            <div id={Styles.gradient_bar} style={{width: props.value / stepValue * 100 + '%'}}></div>
            <span className={Styles.span_counter}>{props.value}</span>
            <span className={Styles.span_counter} id={Styles.absolute}>{stepValue}</span>
        </div>
    )
}
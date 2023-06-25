
import { useEffect, useState } from 'react';
import Styles from '../styles/counterBar.module.css'
import { archivoBlack } from '@/app/font'


export default function CounterBar() {
    
    const [data, setData] = useState("null");
    
    const [stepValue, setStepValue] = useState(500);
    
    useEffect(() => {
        fetch('/api').then((res) => res.json()).then((data) => {
            setData(data)
            if (data >= stepValue) {
                if (data < 4000) {
                    
                    setStepValue(stepValue *2) 
                }
            }
        })
    }, [])
    
    
    const width = data / stepValue * 100;

    console.log(width);


    return (
        <div id={Styles.counter_bar} className={archivoBlack.variable} >
            <span className={Styles.span_counter}>{data}</span>
            <span className={Styles.span_counter}>{stepValue}</span>
            <div id={Styles.gradient_bar} style={{width: width + '%'}}></div>
        </div>
    )
}
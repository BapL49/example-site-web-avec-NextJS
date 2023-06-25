
import Styles from '../styles/counterBar.module.css'
import { archivoBlack } from '@/app/font'

import { kv } from "@vercel/kv";
import { useState } from 'react';



export default async function CounterBar() {


    const counter = await kv.hget('counter:counter', 'number');

    const [stepValue, setStepValue, ] = useState(500);

    const onChange = () => {
        if (counter >= stepValue) {
            setStepValue(stepValue * 2)
        } 
    }

    const width = stepValue / counter *100;

    console.log(stepValue);


    return (
        <div id={Styles.counter_bar} className={archivoBlack.variable} >
            <span className={Styles.span_counter} onChange={onChange}>50</span>
            <span className={Styles.span_counter}>{stepValue}</span>
            <div id={Styles.gradient_bar} style={{width: width + '%'}}></div>
        </div>
    )
}
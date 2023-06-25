
import Styles from '../styles/counterBar.module.css'
import { archivoBlack } from '@/app/font'

import { kv } from "@vercel/kv";



export default async function CounterBar() {
    
    const counter = await kv.hget('counter:counter', 'number');

    let stepValue= 500;
    
    const onChange = () => {
        "use server"
        
        if (counter >= stepValue) {
            if (counter < 4000) {
                
                stepValue = stepValue *2
            }
        } else {
            counter
        }
    }
    const width = stepValue / counter *100;

    console.log(result);


    return (
        <div id={Styles.counter_bar} className={archivoBlack.variable} >
            <span className={Styles.span_counter}>{onChange}</span>
            <span className={Styles.span_counter}>{stepValue}</span>
            <div id={Styles.gradient_bar} style={{width: width + '%'}}></div>
        </div>
    )
}
import Styles from '../styles/counterBar.module.css'
import { archivoBlack } from '@/app/font'



export default  function CounterBar() {


    return (
        <div id={Styles.counter_bar} className={archivoBlack.variable}>
            <span className={Styles.span_counter}>50</span>
            <span className={Styles.span_counter}>500</span>
        </div>
    )
}
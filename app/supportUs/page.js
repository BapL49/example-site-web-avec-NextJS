import Styles from '../../styles/supportUs.module.css'
import { archivoBlack, comfortaa, sen } from '../font'



export default function SupportUs() {



    return (
        <section id={Styles.container}>
            <div className={comfortaa.variable} id={Styles.div_left}>
                <h1 className={archivoBlack.variable} id={Styles.h1}>Unlock some <span id={Styles.span_h1}>good things</span></h1>
                
                <h2  id={Styles.h2}>At each level <span className={Styles.span_h2}>reached</span> , a square with a surprise becomes available.<br/>
                Your <span className={Styles.span_h2}>goal</span> is to reach the last square with the <span className={Styles.span_h2}>biggest surprise</span>. But be careful, you can only increase the <span className={Styles.span_h2}>counter once</span>.
                </h2>

                <button id={Styles.button}>increase the counter</button>
            </div>

            <div id={Styles.div_right} className={sen.variable}>
                <div id={Styles.container_article}>
                    <article className={Styles.articles}>
                        <p className={Styles.step_number}>500</p>
                    </article>

                    <article className={Styles.articles}>
                        <p className={Styles.step_number}>1000</p>
                    </article>

                    <article className={Styles.articles}>
                        <p className={Styles.step_number}>2000</p>
                    </article>

                    <article className={Styles.articles}>
                        <p className={Styles.step_number}>5000</p>
                    </article>
                </div>
                
            </div>

        </section>
    )
}
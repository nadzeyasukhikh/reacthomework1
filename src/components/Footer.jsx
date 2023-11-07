import styles from "./Footer.module.css"

function Footer() {
    return(
        <div className={styles.footer}>
            <p className={styles.textinfo}>Phon number: +306986397429</p>
            <p className={styles.textinfo}>Email: vitserresvit@gmail.com</p>
            <p className={styles.textinfo}>Made by: Sukhikh Nadzeya</p>
        </div>
    )
}

export default Footer
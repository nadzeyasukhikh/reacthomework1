import styles from "./Nav.module.css"

function Nav({onTabChange}){
    return (
        <div className={styles.nav}>
           
            <img className={styles.imgStyle} src="https://img.freepik.com/free-vector/gradient-wolf-logo_23-2150407841.jpg?w=2000" alt="" />
            
            <div className={styles.btnsdiv}>
            <button className={styles.btnStyle} onClick={() => onTabChange("about")}>About as</button>
            <button className={styles.btnStyle} onClick={() => onTabChange('projects')}>Our projects</button>
            <button className={styles.btnStyle} onClick={() => onTabChange('services')}>Our services</button>
            </div>
        </div>
    )
}
export default Nav
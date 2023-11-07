import styles from "./Projects.module.css"

function Projects(){
    return(
        <div className={styles.projects}>
            <h2 className={styles.title}>Our Projects</h2>
            <div className={styles.infodiv}>
            <div>
                <img className={styles.imgstyle} src="https://i.pinimg.com/236x/1b/9b/34/1b9b3430f3e89b95c22937d7c353737e.jpg" alt="" />
                <p className={styles.textstyle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Sed vitae officia in. Saepe, quo aut.
                      Enim magni sed aliquid impedit.</p>
            </div>
            <div>
                <img className={styles.imgstyle} src="https://img.freepik.com/free-photo/beautiful-flowers-with-water-drops_23-2150705631.jpg" alt="" />
                <p className={styles.textstyle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Sed vitae officia in. Saepe, quo aut.
                      Enim magni sed aliquid impedit.</p>
            </div>
            <div>
                <img className={styles.imgstyle} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl-7H4F13rjg2smqzOPQKbueDywmKcwJMU4JAYspM6SiOhfqw27nXOxKDwXDxdGFapHtg&usqp=CAU" alt="" />
                <p className={styles.textstyle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Sed vitae officia in. Saepe, quo aut.
                      Enim magni sed aliquid impedit.</p>
            </div>
            </div>
        </div>
    )
}

export default Projects
import styles from "./About.module.css"

function About (){
    return(<>
        <div className={styles.about}>
            <div>
                <h2 className={styles.title}>About as</h2>
                <p className={styles.textstyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Est commodi vero nulla culpa deserunt,
                      ea consequatur dolorum amet,
                       hic fugit porro et mollitia aspernatur repellendus
                        beatae veritatis cupiditate labore vitae aut? Maiores,
                         neque? Eligendi ab quos esse ipsam numquam maiores
                          facere cumque corporis fuga inventore tenetur,
                           fugiat, porro voluptas iusto?
                           </p>
            </div>
              <div><img className={styles.img} src="https://i.pinimg.com/236x/0e/bd/26/0ebd262c4b7f69f7ec915dbd8509328f.jpg" alt="" /></div>
              
        </div>
        </>
    )
}

export default About
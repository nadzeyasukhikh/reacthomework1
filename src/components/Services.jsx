import styles from "./Services.module.css"

function Services() {
    return(
        <div className={styles.service}>
            <h2 className={styles.title}>Our services</h2>
            <div className={styles.serviceinfo}>
            <img src="https://img.freepik.com/free-photo/beautiful-floral-wallpaper_23-2150705627.jpg?w=2000" alt="" />
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Est id nisi omnis voluptatem, fugit quisquam cumque dolorem 
                 totam praesentium eveniet veniam numquam eius quis aliquid hic?
                  Atque perspiciatis ex nihil iure optio. Ea laudantium,
                   corporis ex neque sapiente distinctio exercitationem omnis
                    debitis fugit mollitia beatae temporibus quia.
                     Doloremque, sit harum.
                     </p>
            </div>

        </div>
    )
}

export default Services
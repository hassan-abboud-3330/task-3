import heroImg from "/src/assets/imgs/hero.png"
import Card from "../../../ui/Card"
import styles from "./Hero.module.css"
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImg}>
        <img src={heroImg} alt="Tow gids play " draggable={false} />
      </div>
      <main className={styles.content}>
        <div className={styles.texts}>
          <span>Welcome to Little Learners Academy</span>
          <h1>Where Young Minds Blossom <br />and <span>Dreams Take Flight.</span></h1>
          <p className={styles.text}>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
        </div>

        <Card className={styles.stats} shadowClr="#ffbe99">
          <div>
            <div className={styles.counter}>+ 7000</div>
            <label>Students Passed Out</label>
          </div>
          <div>
            <div className={styles.counter}>+ 35</div>
            <label>Awards & Recognitions</label>
          </div>
          <div>
            <div className={styles.counter}>+ 15</div>
            <label>Experience Educators</label>
          </div>

        </Card>
      </main>
    </section>
  )
}

export default Hero;
import SectionInfo from "../../../../components/SectionInfo"
import Card from "../../../../ui/Card"
import { cubs9 } from "../../../../assets/icons/icons"
import styles from "./History.module.css"
const History = () => {
  return (
    <section>
      <SectionInfo
        intro="Our Progressive Journey"
        title="Our History"
        content="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
      />
      <Card className={styles.card}>

        <div className={styles.box}>
          <div>
            <div className={styles.line}><div></div></div>
            <Card className={styles.year}> <img src={cubs9} alt="" />2023</Card>
          </div>
          <div>
            <h3>Resilience and Future Horizons</h3>
            <p>Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.</p>
          </div>
        </div>

        <div className={styles.box}>
          <div>
            <div className={styles.line}><div></div></div>
            <Card className={styles.year}>
              <img src={cubs9} alt="" />2017</Card>
          </div>
          <div>
            <h3>Innovation and Technology</h3>
            <p>Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students.</p>
          </div>
        </div>

        <div className={styles.box}>
          <div>
            <div className={styles.line}><div></div></div>
            <Card className={styles.year}><img src={cubs9} alt="" />2012</Card>
          </div>
          <div>
            <h3>Expansion and Recognition</h3>
            <p>These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies.</p>
          </div>
        </div>
        <div className={styles.box}>
          <div>
            <div className={styles.line}><div></div></div>
            <Card className={styles.year}><img src={cubs9} alt="" />2005</Card>
          </div>
          <div>
            <h3>Inception and Growth</h3>
            <p>Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth.</p>
          </div>
        </div>


      </Card>

    </section>
  )
}

export default History

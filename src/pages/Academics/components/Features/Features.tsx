import SectionInfo from "../../../../components/SectionInfo"
import FeaturesCard from "./FeaturesCard"
import { featuresData } from "./data"
import styles from "./Features.module.css"
const Features = () => {
  return (
    <section>
      <SectionInfo
        intro="Our Features"
        title="What Students Learn"
        content="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
      />
      <ul className={styles.cards}>
        {featuresData.map((card, i) => <FeaturesCard
          key={i}
          img={card.img}
          title={card.title}
          content={card.content}
        />
        )}
      </ul>
    </section>
  )
}

export default Features

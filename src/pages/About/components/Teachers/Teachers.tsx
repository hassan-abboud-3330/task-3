import SectionInfo from "../../../../components/SectionInfo"
import TeachersCard from "./TeachersCard"
import teachersData from "./teachersData"
import styles from "./Teachers.module.css"
const Teachers = () => {
  return (
    <section>
      <SectionInfo
        intro="Our Teachers With Experties"
        title="Our Team Members"
        content="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
      />
      <ul className={styles.cards}>
        {teachersData.map(card =>
          <TeachersCard
            key={card.id}
            img={card.img}
            name={card.name}
            title={card.title}
            content={card.content}
          />
        )}
      </ul>
    </section>
  )
}

export default Teachers

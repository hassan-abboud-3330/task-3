import Card from "../../../../ui/Card"
import TeatcherCardButton from "./TeatcherCardButton"
import styles from "./TeachersCard.module.css"

interface TeacherCardProp {
  img: string
  name: string
  title: string
  content: string
}
const TeachersCard = ({ img, name, title, content }: TeacherCardProp) => {
  return (
    <li>
      <Card className={styles.card}>
        <div className={styles.head}>
          <div className={styles.right}>
            <img src={img} alt="teacher" />
            <span className={styles.name}>{name}</span>
          </div>
          <TeatcherCardButton />
        </div>
        <div className={styles.footer}>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </Card>
    </li>
  )
}

export default TeachersCard

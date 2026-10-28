import Card from "../../../../ui/Card"
import styles from "./VisionCard.module.css"
interface VisionCardProps {
  title: string
  icon: string
  content: string
}
const VisionCard = ({ title, icon, content }: VisionCardProps) => {
  return (
    <li className={styles.container}>
      <Card className={styles.card}>
        <div className={styles.head}>
          <h2>{title}</h2>
          <img src={icon} alt="icon" />
        </div>
        <div className={styles.content}>
          {content}
        </div>
      </Card>
    </li>
  )
}

export default VisionCard

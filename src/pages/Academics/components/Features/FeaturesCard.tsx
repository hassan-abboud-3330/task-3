import Card from "../../../../ui/Card"
import styles from "./FeaturesCard.module.css"
interface FeaturesCardProps {
  img: string
  title: string
  content: string
  className?: string
}
const FeaturesCard = ({ img, title, content, className }: FeaturesCardProps) => {
  return (
    <Card className={`${styles.card} ${className}`}>
      <div className={styles.img}>
        <div className={styles.rectangle}></div>
        <img src={img} alt="people" />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{content}</p>
    </Card>
  )
}

export default FeaturesCard;

import Card from "../../../ui/Card"
import styles from "./BenefitsItem.module.css"
interface BenefitsItemProps {
  icon: string
  title: string
  content: string
}
const BenefitsItem = ({ icon, title, content }: BenefitsItemProps) => {
  return (
    <li>
      <Card className={styles.card}>
        <div className={styles.imgWapper}>
          <img className={styles.img} src={icon} alt="icon" draggable={false} />
        </div>
        <h3>{title}</h3>
        <p>{content}</p>
      </Card>
    </li>
  )
}
export default BenefitsItem;
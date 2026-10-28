import Card from "../ui/Card"
import styles from "./GridOfCardsItem.module.css"
interface GridOfCardsItemProps {
  icon: string
  title: string
  content: string
}
const GridOfCardsItem = ({ icon, title, content }: GridOfCardsItemProps) => {
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
export default GridOfCardsItem;


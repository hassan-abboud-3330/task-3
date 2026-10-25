import { star } from "../../../assets/icons/icons"
import Card from "../../../ui/Card"
import styles from "./TestimonialItem.module.css"
interface TestimonialItemProps {
  img: string
  name: string
  content: string
  stars: number

}
const TestimonialItem = ({ img, name, stars, content }: TestimonialItemProps) => {
  return (
    <li className={styles.container}>
      <Card className={styles.card}>
        <div className={styles.imgWrapper}>
          <img src={img} alt="Profile image" draggable={false} />
        </div>
        <p className={styles.name}>{name}</p>
        <div className={styles.starsWrapper}>
          {[...Array(stars)].map((_, index) => <img src={star} key={index} draggable={false} />)}
        </div>
        <p className={styles.content}>{content}</p>
      </Card>
    </li>
  )
}
export default TestimonialItem;
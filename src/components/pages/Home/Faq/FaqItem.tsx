import { useState } from "react"
import styles from "./FaqItem.module.css"
interface FaqItemProps {
  title: string
  content: string
}
const FaqItem = ({ title, content }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <li className={`${styles.container} ${isOpen ? styles.opened : ""}`}>
      <div className={styles.head} onClick={() => setIsOpen(prev => !prev)}>
        <h3>{title}</h3>
        <div className={styles.sign}>{isOpen ? '-' : '+'}</div>
      </div>
      {isOpen && <p className={styles.content}>{content}</p>}
    </li>
  )
}
export default FaqItem;
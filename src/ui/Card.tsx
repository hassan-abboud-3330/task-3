import type { ReactNode } from "react"
import styles from "./Card.module.css"
interface cardProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties;
}
const Card = ({ children, className, style }: cardProps) => {
  return (
    <article className={`${styles.card} ${className}`}
      style={style}
    >
      {children}
    </article>
  )
}
export default Card;
import styles from "./GridOfCards.module.css"
import GridOfCardsItem from "./GridOfCardsItem"

export interface CardData {
  id: number
  icon: string
  title: string
  content: string
}
export type GridOfCardsData = CardData[]
const GridOfCards = ({ data }: { data: GridOfCardsData }
) => {
  return (
    <ul className={styles.grid}>
      {data.map((card) => <GridOfCardsItem key={card.id} icon={card.icon} title={card.title} content={card.content} />)}
    </ul>
  )
}

export default GridOfCards


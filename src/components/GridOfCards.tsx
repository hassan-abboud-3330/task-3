import styles from "./GridOfCards.module.css"
import GridOfCardsItem from "./GridOfCardsItem"

export interface CardData {
  id: number
  icon: string
  title: string
  content: string
}
export type cardsData = CardData[]
const GridOfCards = ({ data }: { data: cardsData }
) => {
  return (
    <ul className={styles.grid}>
      {data.map((card) => <GridOfCardsItem key={card.id} icon={card.icon} title={card.title} content={card.content} />)}
    </ul>
  )
}

export default GridOfCards


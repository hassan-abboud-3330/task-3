import SectionInfo from "../../../components/SectionInfo";
import NavItem from "./NavItem";
import { cardsData } from "./cardsData";
import styles from "./NavigationCards.module.css"

const NavigationCards = () => {
  return (
    <section className={styles.container}>
      <SectionInfo intro="Explore More" title="Navigate through our Pages" content="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school  " />

      <div className={styles.grid}>
        {cardsData.map(card => <NavItem
          key={card.id}
          title={card.title}
          content={card.content}
        />)}
      </div>
    </section>
  )
}

export default NavigationCards;


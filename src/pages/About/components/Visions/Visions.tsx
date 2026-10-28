import SectionInfo from "../../../../components/SectionInfo"
import VisionCard from "./VisionCard"

import styles from "./Visions.module.css"
import { cards } from "./data"
const Visions = () => {
  return (
    <section>
      <SectionInfo
        intro="Mission & Visions"
        title="Our Mission & Visions"
        content="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth." />
      <ul className={styles.cards}>
        {cards.map((card, i) => <VisionCard
          title={card.title}
          icon={card.icon}
          content={card.content}
          key={i}
        />)}
      </ul>
    </section>
  )
}

export default Visions

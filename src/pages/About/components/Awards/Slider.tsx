import { useState } from "react";
import GridOfCardsItem from "../../../../components/GridOfCardsItem";
import { arrowLeft, arrowRight } from "../../../../assets/icons/icons";
import awardsData from "./AwardData";
import type { Awards } from "./AwardData";
import styles from "./Slider.module.css"

const Slider = () => {
  // state
  const [current, setCurrent] = useState(0)

  const handleGoPrev = () => {
    setCurrent(prev => prev === 0 ? (awardsData.length - 1) : (prev - 1))
  }

  const handleGoNext = () => {
    setCurrent(prev =>
      prev === (awardsData.length - 1) ? 0 : (prev + 1)
    )
  }

  //selecte three cards started by current card, on desktop view.

  const desktopCards: Awards = [
    awardsData[current],
    awardsData[(current + 1) % awardsData.length], awardsData[(current + 2) % awardsData.length]];
  // console.log(desktopCards);

  return (
    <div className={styles.slider}>

      {/* // Mobile view */}
      <div className={styles.mobileView}>
        <GridOfCardsItem
          icon={awardsData[current].icon}
          title={awardsData[current].title}
          content={awardsData[current].content}
        />
      </div>

      {/* // Desktop view */}
      <ul className={styles.desktopView}>
        {desktopCards.map(
          card => <GridOfCardsItem
            icon={card.icon}
            title={card.title}
            content={card.title}
            key={card.id}
          />)}
      </ul>

      {/* // Controls */}
      <div className={styles.controls}>
        <div className={styles.controls__caption}>{(awardsData.length - 1) - current} More Awards</div>
        <div className={styles.controls__actions}>
          <button className={styles.prev} onClick={handleGoPrev}>
            <img src={arrowLeft} alt="" />
          </button>
          <button className={styles.next} onClick={handleGoNext}>
            <img src={arrowRight} alt="icon" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Slider

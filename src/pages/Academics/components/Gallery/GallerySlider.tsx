import { useState } from "react"
import Card from "../../../../ui/Card"

import { arrowLeft, arrowRight } from "../../../../assets/icons/icons"
import styles from "./GallerySlider.module.css"
import type { GalleryData } from "./data"

const GallerySlider = ({ data }: { data: GalleryData }) => {
  // state
  const [current, setCurrent] = useState(0)

  const handleGoPrev = () => {
    setCurrent(prev => prev === 0 ? (data.imgs.length - 1) : (prev - 1))
  }

  const handleGoNext = () => {
    setCurrent(prev =>
      prev === (data.imgs.length - 1) ? 0 : (prev + 1)
    )
  }


  //selecte four imgs started by current card, on desktop view.
  const desktopImgs = [
    data.imgs[current],
    data.imgs[(current + 1) % data.imgs.length],
    data.imgs[(current + 2) % data.imgs.length],
    data.imgs[(current + 3) % data.imgs.length],
  ];

  return (

    <Card className={styles.card}>
      {/* // mobile view */}
      <div className={`${styles.imgsWrapper} ${styles.mobileView}`}>
        <img src={data.imgs[current].img} alt="" />
      </div>

      {/* // Desktop view */}
      <ul className={`${styles.desktopView} ${styles.imgsWrapper}`}>
        {desktopImgs.map(
          card => <img src={card.img} alt="" />
        )}
      </ul>

      <div className={styles.controls}>
        <button className={styles.prev} onClick={handleGoPrev}>
          <img src={arrowLeft} alt="" />
        </button>
        <button className={styles.next} onClick={handleGoNext}>
          <img src={arrowRight} alt="" />
        </button>
      </div>

      <h2 className={styles.title}>{data.title}</h2>
      <p className={styles.content}>{data.content}</p>
    </Card>
  )
}

export default GallerySlider;

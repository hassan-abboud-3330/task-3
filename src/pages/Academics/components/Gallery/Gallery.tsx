import { useState } from "react"
import SectionInfo from "../../../../components/SectionInfo"
import GallerySlider from "./GallerySlider"
import { classroomsData, libraryData, scienceLabData, computerLabData, gardenData } from "./data"
import styles from "./Gallery.module.css"
const Gallery = () => {
  const [category, setCategory] = useState("all")
  const [active, setActive] = useState("all")
  const handleAll = () => {
    setCategory("all");
    setActive("all")
  }
  return (
    <section>
      <SectionInfo
        intro="Our Gallery"
        title="Our Rooms Gallery"
        content="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
      />
      <div className={styles.buttons}>
        <button
          className={`${styles.btn} ${active === "all" ? `${styles.active}` : ""}`}
          onClick={handleAll}
        >All</button>
        <button
          className={`${styles.btn} ${active === "class" ? `${styles.active}` : ""}`}
          onClick={() => { setCategory("class"); setActive("class") }}>Classrooms</button>
        <button
          className={`${styles.btn} ${active === "library" ? `${styles.active}` : ""}`}
          onClick={() => { setCategory("library"); setActive("library") }}>Library</button>
        <button
          className={`${styles.btn} ${active === "science" ? `${styles.active}` : ""}`}
          onClick={() => { setCategory("science"); setActive("science") }}>Science Lab</button>
        <button
          className={`${styles.btn} ${active === "computer" ? `${styles.active}` : ""}`}
          onClick={() => { setCategory("computer"); setActive("computer") }}>Computer Lab</button>
        <button
          className={`${styles.btn} ${active === "garden" ? `${styles.active}` : ""}`}
          onClick={() => { setCategory("garden"); setActive("garden") }}>Garden and Nature Area</button>
      </div>
      <div className={styles.gallery}>
        {(category === "all" || category === "class") && <GallerySlider data={classroomsData} />}
        {(category === "all" || category === "library") && <GallerySlider data={libraryData} />}
        {(category === "all" || category === "science") && <GallerySlider data={scienceLabData} />}
        {(category === "all" || category === "computer") && <GallerySlider data={computerLabData} />}
        {(category === "all" || category === "garden") && <GallerySlider data={gardenData} />}
      </div>

    </section>
  )
}

export default Gallery

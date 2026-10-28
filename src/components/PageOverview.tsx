import Card from "../ui/Card"
import SectionInfo from "./SectionInfo"
import { cubs } from "../assets/icons/icons"
import type { SectionProps } from "./SectionInfo"
import styles from "./PageOverview.module.css"
const PageOverview = ({ intro, title, content }: SectionProps) => {
  return (
    <Card style={{ position: "relative" }} className={styles.card}>
      <div className={styles.img}><img src={cubs} alt="" /></div>
      <SectionInfo className={styles.overview}
        intro={intro}
        title={title}
        content={content} />
    </Card>
  )
}

export default PageOverview

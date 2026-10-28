import SectionInfo from "../../../components/SectionInfo";
import GridOfCards from "../../../components/GridOfCards";
import { benefitsData } from "./data";
import styles from "./Benefits.module.css"

const Benefits = () => {
  return (
    <section className={styles.container}>
      <SectionInfo
        intro="Children Deserve Bright Future Our Benefits"
        title="Our Benefits"
        content="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future." />

      <GridOfCards data={benefitsData} />
    </section>
  )
}
export default Benefits;
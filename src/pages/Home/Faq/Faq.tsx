import SectionInfo from "../../../components/SectionInfo"
import FaqItem from "./FaqItem"
import { faqsData } from "./Faqs"
import styles from "./Faq.module.css"

const Faq = () => {
  // place the FAGs into two arrays 
  const col1 = faqsData.filter((_, i) => i % 2 === 0)
  const col2 = faqsData.filter((_, i) => i % 2 !== 0)
  return (
    <section className={styles.container}>
      <SectionInfo intro="Solutions For The Doubts" title="Frequently Asked Questions" content="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education." />

      <ul className={styles.flex}>
        <ul className={styles.box}>{col1.map(item => <FaqItem key={item.id} title={item.title} content={item.content} />)}</ul>
        <ul className={styles.box}>{col2.map(item => <FaqItem key={item.id} title={item.title} content={item.content} />)}</ul>
      </ul>
    </section>
  )
}
export default Faq;
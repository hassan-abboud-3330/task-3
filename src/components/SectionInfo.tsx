import styles from "./SectionInfo.module.css"
export interface SectionProps {
  intro: string
  title: string
  content: string
  className?: string
}
const SectionInfo = ({ intro, title, content, className }: SectionProps) => {
  return (
    <article className={`${className} ${styles.container}`}>
      <p className={styles.intro}>{intro}</p>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{content}</p>
    </article>
  )
}
export default SectionInfo;

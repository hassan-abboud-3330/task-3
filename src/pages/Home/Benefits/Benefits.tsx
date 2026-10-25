import SectionInfo from "../../../components/SectionInfo";
import BenefitsItem from "./BenefitsItem";
import { univ, crown, mask, flag, tier, users } from "../../../assets/icons/icons"
import styles from "./Benefits.module.css"
const benefitsData = [
  { icon: univ, title: 'Holistic Learning Approach', content: 'Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.' },
  { icon: crown, title: 'Experienced Educators', content: 'Our passionate and qualified teachers create a supportive and stimulating learning environment.' },
  { icon: mask, title: 'Nurturing Environment', content: 'We prioritize safety and provide a warm and caring atmosphere for every child.' },
  { icon: flag, title: 'Play-Based Learning', content: 'We believe in the power of play to foster creativity, problem-solving skills, and imagination.' },
  {
    icon: tier, title: 'Individualized Attention', content: "Our small class sizes enable personalized attention, catering to each child's unique needs."
  },
  { icon: users, title: 'Parent Involvement', content: "We foster a strong parent-school partnership to ensure seamless communication and collaboration." },
];
const Benefits = () => {
  return (
    <section className={styles.container}>
      <SectionInfo
        intro="Children Deserve Bright Future Our Benefits"
        title="Our Benefits"
        content="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future." />
      <ul className={styles.grid}>
        {benefitsData.map((item, i) => <BenefitsItem key={i} icon={item.icon} title={item.title} content={item.content} />)}
      </ul>
    </section>
  )
}
export default Benefits;
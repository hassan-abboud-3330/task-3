import type { GridOfCardsData } from "../../../components/GridOfCards";
import { univ, crown, mask, flag, tier, users } from "../../../assets/icons/icons"
export const benefitsData: GridOfCardsData = [
  { icon: univ, title: 'Holistic Learning Approach', content: 'Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.', id: 1 },
  { icon: crown, title: 'Experienced Educators', content: 'Our passionate and qualified teachers create a supportive and stimulating learning environment.', id: 2 },
  { icon: mask, title: 'Nurturing Environment', content: 'We prioritize safety and provide a warm and caring atmosphere for every child.', id: 3 },
  { icon: flag, title: 'Play-Based Learning', content: 'We believe in the power of play to foster creativity, problem-solving skills, and imagination.', id: 4 },
  {
    icon: tier, title: 'Individualized Attention', content: "Our small class sizes enable personalized attention, catering to each child's unique needs.", id: 5
  },
  { icon: users, title: 'Parent Involvement', content: "We foster a strong parent-school partnership to ensure seamless communication and collaboration.", id: 6 },
];
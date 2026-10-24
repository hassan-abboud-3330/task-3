import { user1, user2, user3 } from "../../../../assets/icons/icons"

interface Testimonial {
  img: string
  name: string
  stars: number
  content: string
}
export const testimonials: Testimonial[] = [
  { img: user1, name: "Jennifer B", stars: 5, content: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!" },
  { img: user2, name: "David K", stars: 5, content: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment." },
  { img: user3, name: "Emily L", stars: 5, content: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers." },
  { img: user3, name: "test 1", stars: 3, content: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers." },
  { img: user3, name: "test 2", stars: 2, content: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers." }
]
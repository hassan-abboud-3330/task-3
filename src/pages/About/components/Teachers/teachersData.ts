import { teacher1, teacher2, teacher3, teacher4, teacher5, teacher6 } from "../../../../assets/imgs/imgs"
interface Teacher {
  id: number
  img: string
  name: string
  title: string
  content: string
}
const teachersData: Teacher[] = [
  {
    id: 0,
    img: teacher1,
    name: "Ms. Sarah Anderson",
    title: "Qualification:Bachelor's Degree in Early Childhood Education",
    content: "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn."
  },
  {
    id: 1,
    img: teacher2,
    name: "Mr. David Roberts",
    title: "Qualification: Master's Degree in Elementary Education",
    content: "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically."
  },
  {
    id: 3,
    img: teacher3,
    name: "Ms. Emily Hernandez",
    title: "Qualification: Diploma in Child Psychology",
    content: "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students."
  },
  {
    id: 4,
    img: teacher4,
    name: "Mr. Michael Turner",
    title: "Qualification: Bachelor's Degree in Physical Education",
    content: "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle."
  },
  {
    id: 5,
    img: teacher5,
    name: "Ms. Jessica Lee",
    title: "Qualification: Master's Degree in Special Education",
    content: "Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential."
  },
  {
    id: 6,
    img: teacher6,
    name: "Mr. William Parker",
    title: "Qualification: Bachelor's Degree in Fine Arts",
    content: "Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students."
  },
]

export default teachersData;
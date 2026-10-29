import { featurs1, featurs2, featurs3, featurs4, featurs5, featurs6 } from "../../../../assets/imgs/imgs"
interface Feature {
  id: Number
  title: string
  content: string
  img: string

}
type FeaturesData = Feature[]
export const featuresData: FeaturesData = [
  {
    id: 1,
    title: "Language Arts",
    content: "Reading, writing, storytelling, and communication skills.",
    img: featurs1
  },
  {
    id: 2,
    title: "Mathematics",
    content: "Number sense, basic operations, problem-solving, and logic.",
    img: featurs2
  },
  {
    id: 3,
    title: "Science",
    content: "Exploring the natural world through hands-on experiments and investigations."
    , img: featurs3
  },
  {
    id: 4,
    title: "Social Studies",
    content: "Cultivating an understanding of diverse cultures and communities.",
    img: featurs4
  },
  {
    id: 5,
    title: "Arts and Crafts",
    content: "Encouraging creativity through various art forms and crafts."
    , img: featurs5
  },
  {
    id: 6,
    title: "Phisical Education",
    content: "Promoting phisical fitness, coordination, and teamwork.",
    img: featurs6
  }
]
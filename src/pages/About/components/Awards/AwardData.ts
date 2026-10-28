import { chart, lightning, bars } from "../../../../assets/icons/icons";

interface Award {
  id: number
  title: string
  icon: string
  content: string
}
export type Awards = Award[]

const awardsData: Awards = [
  {
    id: 0,
    icon: chart,
    title: "Outstanding Early Childhood Education Awar",
    content: "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment."
  },
  {
    id: 1,
    icon: bars,
    title: "Innovative STEAM Education Award",
    content: "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners."
  },
  {
    id: 2,
    icon: lightning,
    title: "Environmental Stewardship Award",
    content: "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students."
  },
  {
    id: 3,
    icon: bars,
    title: "Test",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eos non vitae cum optio ipsam quaerat consequuntur provident exercitationem recusandae obcaecati ipsa dolore, possimus sunt autem. Fugiat nemo saepe rem ullam enim dignissimos ."
  },
]

export default awardsData;
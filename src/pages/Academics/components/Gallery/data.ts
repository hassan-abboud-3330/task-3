import {
  classroom1, classroom2, classroom3, classroom4, library1, library2, library3, library4, science1, science2, science3, science4, computer1, computer2, computer3, computer4, garden1, garden2, garden3, garden4
} from "../../../../assets/imgs/imgs"

export interface GalleryData {
  imgs: { img: string }[]
  title: string
  content: string
}
export const classroomsData: GalleryData =
{
  imgs: [
    { img: classroom1 },
    { img: classroom2 },
    { img: classroom3 },
    { img: classroom4 },
  ],
  title: "Classrooms",
  content: "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement."
}
export const libraryData: GalleryData =
{
  imgs: [
    { img: library1 },
    { img: library2 },
    { img: library3 },
    { img: library4 },
  ],
  title: "Library",
  content: "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development."
}
export const scienceLabData: GalleryData =
{
  imgs: [
    { img: science1 },
    { img: science2 },
    { img: science3 },
    { img: science4 },
  ],
  title: "Science Lab",
  content: "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way."
}
export const computerLabData: GalleryData =
{
  imgs: [
    { img: computer1 },
    { img: computer2 },
    { img: computer3 },
    { img: computer4 },
  ],
  title: "Computer Lab",
  content: "Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills"
}
export const gardenData: GalleryData =
{
  imgs: [
    { img: garden1 },
    { img: garden2 },
    { img: garden3 },
    { img: garden4 },
  ],
  title: "Garden and Nature Area",
  content: "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment."
}

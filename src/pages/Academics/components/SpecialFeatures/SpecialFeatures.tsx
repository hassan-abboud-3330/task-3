import SectionInfo from "../../../../components/SectionInfo"
import GridOfCards from "../../../../components/GridOfCards"
import { specialFeaturesData } from "./data"

const SpecialFeatures = () => {
  return (
    <section>
      <SectionInfo
        intro="Our Features"
        title="Our Special Features"
        content="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
      />
      <GridOfCards data={specialFeaturesData} />
    </section>
  )
}

export default SpecialFeatures

import { mail } from "../../../../assets/icons/icons";
import styles from "./TeatcherCardButton.module.css"

const TeatcherCardButton = () => {
  return (
    <button className={styles.button}>
      <img src={mail} alt="icon" />
    </button>
  )
}

export default TeatcherCardButton

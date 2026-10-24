import styles from "./NavItem.module.css"
import { border, arrowRight } from "../../../../assets/icons/icons";
import Card from "../../../../ui/Card";
// import {dashed} from "../../assets/icons/bo"
interface NavItemProps {
  title: string
  content: string
}
const NavItem = ({ title, content }: NavItemProps) => {
  return (
    <Card className={styles.card}>
      <h3>{title}</h3>
      <img src={border} alt="border" />
      <p>{content}</p>
      <Card className={styles.btn}>
        <button>Learn More <img src={arrowRight} alt="icon" /></button>
      </Card>
    </Card>
  )
}
export default NavItem;
import { Outlet } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "./Root.module.css"
const Root = () => {
  return (
    <MainLayout>
      <Header />
      <div className={styles.children}>
        <Outlet />
      </div>
      <Footer />
    </MainLayout>
  )
}
export default Root;
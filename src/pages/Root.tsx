import { Outlet } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
const Root = () => {
  return (
    <MainLayout>
      <Header />
      <Outlet />
      <Footer />
    </MainLayout>
  )
}
export default Root;
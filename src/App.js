import "./App.css";
import { HomeMaster } from "./pages/home";
import { BrandMaster } from "./pages/BrandPage";
import CommonProduct from "./pages/productsNewArrival/common";
import { FooterMaster } from "./components/Footer";

function App() {
  return (
    <>
      <HomeMaster />
      <BrandMaster />
      <CommonProduct />
      <FooterMaster />
    </>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { SignUpInMaster } from "./pageComponents/sign-up-in";
import CartmasterPage from "./pages/cartMasterPage";
import HomeMasterPage from "./pages/homeMasterPage";
import NoPageFoundMasterPage from "./pages/noPageFound";
import ProductMasterPage from "./pages/productPage";
import DashboardPage from "./pages/dashboardPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUpInMaster />} />
        <Route path="/home" element={<HomeMasterPage />} exact />
        <Route path="/cart" element={<CartmasterPage />} exact />
        <Route path="/product" element={<ProductMasterPage />} exact />
        <Route path="/dashboard" element={<DashboardPage />} exact />
        <Route path="/*" element={<NoPageFoundMasterPage />} />
      </Routes>
    </>
  );
}

export default App;

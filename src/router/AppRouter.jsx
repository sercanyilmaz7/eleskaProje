import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/Home";
import Footer from "../components/footer/Footer";
import Menu from "../pages/Menu";
import About from "../pages/About";
import MultiStepForm from "../components/stepper/MultiStepForm";
import Error from "../components/not404/Error";
import Login from "../pages/Login";
import Campaign from "../pages/Campaign";
import Basket from "../components/basket/Basket";
import Checkout from "../components/basket/Checkout";
import MainAcc from "../components/hesap/MainAcc";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Checkout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<MultiStepForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/campaigns" element={<Campaign />} />
        <Route path="/myaccount" element={<MainAcc />} />
      

        {/* <Route path="" element={}/>  */}
        {/* <Header /> */}
        {/* <Menu /> */}
        {/* <Home /> */}
        {/* <Steps /> */}
        {/* <Orbit radius={400} /> */}
        {/* <Slider /> */}
        {/* <About /> */}
        {/* <Connect /> */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;

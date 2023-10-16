import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import useProducts from "./hooks/useProducts";
import logo from "./assets/ph-icon.png";

function App() {
  const { isLoading } = useProducts();
  if (isLoading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center bg-primary text-secondary z-50">
        <img src={logo} alt="logo perfect harmony" className="motion-reduce:animate-spin" width={150} />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

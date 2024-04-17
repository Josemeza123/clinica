import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Table from "./components/Table";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from './components/Login'
import Nosotros from './components/Nosotros'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={"not fount"} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

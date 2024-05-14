import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Volunteer from "./pages/Volunteer/Volunteer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FooterCover from "./components/FooterCover";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
      <FooterCover />
      <Footer />
    </>
  );
}

export default App;

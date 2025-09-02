import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Demos from "./components/Demos";
import Real from "./components/Real";
import Taskflow from "./components/Taskflow";
import Portfolio from "./components/Portfolio";
import Contact from "./components/ContactForm";
import Resume from "./components/Resume";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="demos">
          <Route index element={<Demos />} />
          <Route path="real" element={<Real />} />
          <Route path="task-flow" element={<Taskflow />} />
          <Route path="portfolio-gen" element={<Portfolio />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

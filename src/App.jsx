import "./Styles/main.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { projects } from "./helpers/projectsList";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import ProjectPage from "./pages/ProjectPage";
import ScrollToTop from "./utils/scrollToTop";

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectPage />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

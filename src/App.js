import { useState } from "react";
import "./App.css";
import Banner from "./components/Sections/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import StorageBank from "./components/Sections/StorageBank/StorageBank";
import Features from "./components/Sections/Features/Features";
import Testimonials from "./components/Sections/Testimonials/Testimonials";
import TryForFree from "./components/Sections/TryForfree/TryForFree";
import Footer from "./components/Footer/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("About");

  return (
    <div className="App">
      <Navbar activeSection={activeSection} />
      <Banner />
      <StorageBank />
      <Features />
      <Testimonials />
      <TryForFree />
      <Footer />
    </div>
  );
}

export default App;

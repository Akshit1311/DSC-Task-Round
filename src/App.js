import { useRef } from "react";
import "./App.css";
import Banner from "./components/Sections/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import StorageBank from "./components/Sections/StorageBank/StorageBank";
import Features from "./components/Sections/Features/Features";
import Testimonials from "./components/Sections/Testimonials/Testimonials";
import TryForFree from "./components/Sections/TryForfree/TryForFree";
import Footer from "./components/Footer/Footer";

function App() {
  const activeSection = "About";

  const aboutRef = useRef(null);
  const helpRef = useRef(null);
  const featRef = useRef(null);
  const signUpRef = useRef(null);

  return (
    <div className="App">
      <Navbar
        activeSection={activeSection}
        aboutRef={aboutRef}
        helpRef={helpRef}
        featRef={featRef}
        signUpRef={signUpRef}
      />
      <Banner aboutRef={aboutRef} />
      <StorageBank />
      <Features featRef={featRef} />
      <Testimonials helpRef={helpRef} />
      <TryForFree signUpRef={signUpRef} />
      <Footer />
    </div>
  );
}

export default App;

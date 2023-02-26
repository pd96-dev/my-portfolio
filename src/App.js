import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

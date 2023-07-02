import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      {/* <h1 className="text-4xl font-bold font-signature">Hello</h1> */}
      <Navbar/>

      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>

      <SocialLinks/>
    </div>
  );
}

export default App;

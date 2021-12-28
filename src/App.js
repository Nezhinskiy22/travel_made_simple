import logo from "./logo.svg";
import "./App.css";
import travel01 from "./assets/Bakota-panorama-03-Int.jpg";
import travel02 from "./assets/ad35269c03be7d093cfd15d4f3e141c7big-533535c7ff93674d4f8b45a5-55d478bb5ff16-1at8u5r.jpg";
import travel03 from "./assets/Kamyanets-1.jpg";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";

const navbarLinks = [
  { url: "#", title: "Home" },
  { url: "#", title: "Trips" },
  { url: "#", title: "Rewards" },
];

function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={travel01} />
      <Slider
        imageSrc={travel02}
        title="Be an explorer!"
        subtitle="Our platform offers a wide variety of unique travel locations!"
      />
      <Slider
        imageSrc={travel03}
        title="Memories for a lifetime"
        subtitle="Your dream vacation is only a few clicks away."
        flipped={true}
      />
    </div>
  );
}

export default App;

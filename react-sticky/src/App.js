import logo from "./logo.svg";
import "./App.css";
import "./Nav.css";
import {useEffect} from "react";
function App() {
  useEffect(() => {
    const handleScroll = () => {
      // Implement the JavaScript logic for sticky navbar

      var navbar = document.getElementById("navbar");
      var header = document.querySelector("header");
      var stickyThreshold = navbar.offsetHeight; // Adjust this based on your header's height

      if (window.pageYOffset >= stickyThreshold) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <nav id="navbar">Nav</nav>
      </header>

      <main></main>
    </>
  );
}

export default App;

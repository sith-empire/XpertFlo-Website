import { useEffect } from "react";
import "./App.scss";
import Button from "./components/Button/Button";
import Navbar from "./components/Navbar/Navbar";

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);
  return (
    <div className="App">
      <Navbar />
      <section className="section-1">
        <h1>Stop searching, start finding</h1>
        <p>
          XpertFlo.io is a browser extension that analyzes websites, captures
          what matters, and lets you retrieve them later by typing plain English
          in your address bar. Built for teams that need answers fast, not
          bookmark chaos.
        </p>
        <div className="hero-cta">
          <input placeholder="Your email address"></input>
          <Button>Download</Button>
        </div>
        <small>By signing up you agree to our terms and conditions.</small>
      </section>
    </div>
  );
}

export default App;

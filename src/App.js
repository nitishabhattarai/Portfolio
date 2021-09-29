import { BrowserRouter as Router, Route } from "react-router-dom";
import { Skills } from "./Components/Skills/Skills";
import { Contact } from "./Components/Contact/Contact";
import { Works } from "./Components/Works/Works";
import { Blogs } from "./Components/Blogs/Blogs";
import { Footer } from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Route to="/">
          <Main />
        </Route>
        {/* <Route to="/#about">
          <About />
        </Route>
        <Route to="/#works">
          <Works />
        </Route>
        <Route to="/#skills">
          <Skills />
        </Route>
        <Route to="/#blogs">
          <Blogs />
        </Route>
        <Route to="/#contact">
          <Contact />
        </Route>
        <Route to="/">
          <Footer />
        </Route> */}
      </Router>
    </div>
  );
}

export default App;

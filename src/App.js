import React, {useState,useEffect} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Dropdown from "./components/Dropdown";
import Courses from "./components/Courses";
import Projects2 from './components/Projects2';

function App() {

  const [isOpen,setIsOpen] = useState(false);
  const toggle = ()=>{
    setIsOpen(!isOpen);
  };

  useEffect(()=>{
    const hideMenu=()=>{
      if(window.innerWidth>768 && isOpen){
        setIsOpen(false);
      }
    }
    window.addEventListener('resize',hideMenu);
    return()=>{
      window.removeEventListener('resize',hideMenu);
    }
  });
  return (
    <BrowserRouter>
      <NavBar toggle={toggle}></NavBar>
      <Dropdown isOpen={isOpen} toggle={toggle}></Dropdown>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Resume} path="/resume" />
        <Route component={Projects2} path="/projects" exact />
        <Route component={Courses} path="/courses"/>
        <Route component={About} path="/about" />
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
  );
}
 export default App;
import logo from './logo.svg';
import './App.css';
import './App.css';
import {
  BrowserRouter,
  Routes, Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contentOfPages/Home';
import About from './contentOfPages/About';
import Education from './contentOfPages/Education';
import Skills from './contentOfPages/Skills';
import Contact from './contentOfPages/Contact';
import {useState} from "react";


function App() {

  const [hobbies,setHobbies] = useState([]);
  
  
    const [title,setTitle] = useState("");
    const [showMore,setShowMore] = useState(false);
    const [buttonName, setButtonName] = useState("More...");
  

    function addMore () {
      if (showMore===false) {
      setTitle("Hobbies");
      setHobbies([{id:1,title:"Basketball",content:"Antonije has been playing basketball since he was eight and he really enjoys it!"},
      {id:2,title:"Football",content:"Marko has been playing football for long time and he supports Partizan Belgrade."},
      {id:3,title:"Reading",content:"We both love business books and science fiction."},
      {id:4,title:"Quizzes",content:"We haven't participated in one yet, but we are planning to go to one of the pub quizzes soon."}]);
      setShowMore(true);
      setButtonName("Less...");
      } else {
        setTitle("");
        setHobbies([]);
      setShowMore(false);
      setButtonName("More...");
      }
  
    }


    
  return (
    <BrowserRouter>
    <div className='App'>
    <Navbar/>
    <Routes>

      <Route exact path="/" element={ <Home />} />

      <Route path="/about" element={<About title={title} hobbies={hobbies} buttonName = {buttonName} addMore={addMore}/>} />

      <Route path="/education" element={<Education />} />

      <Route path="/skills" element={<Skills />} />

      <Route path="/contact" element={<Contact />} />


    </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;

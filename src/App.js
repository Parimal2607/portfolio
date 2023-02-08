import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './component/AboutMe';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Contact from "./component/Contact"
// import Testimonial from './component/Testimonial';
import TestimonialPage from './component/TestimonialPage';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Navbar/>}/>
          <Route exact path="/footer" element={<Footer/>}/>
          <Route exact path="/about-me" element={<AboutMe/>}/>
          <Route exact path="/contact-me" element={<Contact/>}/>
          <Route exact path="/testimonial" element={<TestimonialPage/>}/>
          <Route>404 not found!</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

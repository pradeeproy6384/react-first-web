import logo from './logo.svg';
import './Styles.css';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Master from './components/Master';
import Floor from './components/Floor';
import Contact from './components/Contact';


function App() {
  return (
    <>
    <h1>Buniyad</h1>
    {/* <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/master" element={<Master />} />
      <Route path="/floor" element={<Floor />} />
      <Route path="/contact" element={<Contact />} />
   </Routes> */}
   
    </>
  );
}

export default App;

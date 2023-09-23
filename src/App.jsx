import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react'
import NavBar from './components/NavBar';
import Landing from './pages/Landing';
import Contact from './pages/Contact';
import Register from './pages/Register';

function App() {
  const [modal, setModal] = useState(false);

  return (
    <Router>
      <article>
        {window.matchMedia("(min-width:1024px)").matches && <NavBar modal={modal} setModal={setModal}/>}
        <Routes>
          <Route path='/' element={<Landing />} />    
          <Route path='/contact' element={<Contact />} />    
          <Route path='/register' element={<Register modal={modal} setModal={setModal}/>} />        
        </Routes>
      </article>
    </Router>
  )
}

export default App

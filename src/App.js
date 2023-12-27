import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHouse } from '@fortawesome/free-solid-svg-icons'
import { Route, Routes, Link } from 'react-router-dom';
import MoviePage from "./MoviePage";
import AddMovie from "./addMovie";



function App() {





  return (
    <div className="navigation">

      <nav>
        <Link to="/"><FontAwesomeIcon icon={faHouse} style={{color: "#ffffff",}} /></Link>

      </nav>

      <Routes>
        <Route path="/" element={<AddMovie />} />
        <Route path="/MoviePage/:index" element={<MoviePage/>}></Route>
        
      </Routes>




    </div>
  );
}

export default App;

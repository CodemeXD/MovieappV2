import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Button from "react-bootstrap/Button";
import Myform from "./component/Myform";
import Carroussel from "./component/Carrousel";
import MovieCard from "./component/MovieCard";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import videoCamera from './images/video-camera.png'
import filter from './images/filter.png'

function App() {
  const [movies, setMovie] = useState([]);

  const [filterTitle, setfilterTitle] = useState("");

  const [filterRate, setfilterRate] = useState("");

  const handleMovie = (formdata) => {
    setMovie([...movies, formdata]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (!filterRate || movie.rate >= parseFloat(filterRate))
  );

  return (
    <div className="App">
      <div className="titleApp">
        Your Best <Button variant="danger"> Movie.com</Button>
      </div>

      <div className="principalContainer">
        <div className="container">
          <div className="left">
            <Carroussel />
          </div>

          <div className="right">
            <div className="addMovie">
              <span>
                Add information on your favorite  <span className="Movie">movie</span>
                
              </span>
            </div>

            <Myform onAddMovie={handleMovie} />
          </div>
        </div>

        <div className="movieContent">
          <div className="filter">
            <div className="row">
              <div className="col-md-4 myfilterTitle">
                <span className="">Filter by <img src={filter} alt="filter" style={{width:20}}/> : </span>
              </div>
              <div className="col-md-4 ">
                <label htmlFor="titleFilter">Title </label>
                <Form.Control
                  type="text"
                  className="custom-input"
                  placeholder="enter title"
                  onChange={(e) => setfilterTitle(e.target.value)}
                  name="titleFilter"
                  id="titleFilter"
                />
              </div>
                  
                  
           
              <div className="col-md-4 ">
                <label htmlFor="rateFilter">Rate </label>
                <Form.Control
                  type="text"
                  className="custom-input"
                  placeholder="enter Rate "
                  onChange={(e) => setfilterRate(e.target.value)}
                  name="rateFilter"
                  id="rateFilter"
                />
              </div>
            </div>
          </div>


           <div className="titleMovie">
                  
                  <h2>MY MOVIE LIST <img src={videoCamera} alt=""  style={{width:50}}/> </h2>
           </div>



        <div className="movieList row">
        {filteredMovies.map((movie, index) => (
            <MovieCard
              className="MovieCard"
              key={index}
              title={movie.title}
              description={movie.description}
              rate={movie.rate}
              poster={movie.poster}
            />
          ))}
        </div>

         
        </div>
      </div>
    </div>
  );
}

export default App;

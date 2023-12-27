import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";

 function Myform({onAddMovie}) {


   

        const [formdata, setFormData] = useState({
            title: "",
            description: "",
            rate: "",
            poster: "",
            trailer:"",
          });


  const handleChange = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  
    //Props de fonction contenant toutes les informations saisi dans le formulaire 
    onAddMovie(formdata)

    //Réinitialisé le formulaire 

    setFormData({
      title: "",
      description: "",
      rate: "",
      poster: "",
      trailer:"",
    })

    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="Myform">
        <div className="row">
          <div className="col-md-6 firstPunt">
            <label htmlFor="title">Title </label>
            <Form.Control
              type="text"
              className="custom-input"
              placeholder="add movie name"
              name="title"
              id="title"
              onChange={handleChange}
              value={formdata.title} 
            />
          </div>

          <div className="col-md-5">
            <label htmlFor="description">Description </label>
            <Form.Control as="textarea"
              rows={1}
              type="text"
              placeholder="Enter description"
              name="description"
              id="description"
              onChange={handleChange}
              value={formdata.description}
            />
          </div>
        </div>

       


        <div className="row secondeLine">
          <div className="col-md-4 firstPunt">
            <label htmlFor="rate"> Rate </label>
            <Form.Control
              type="number"
              placeholder="Enter a rate "
              name="rate"
              id="rate"
              onChange={handleChange}
              value={formdata.rate}
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="poster">film poster</label>
            <Form.Control
              type="text"
              placeholder="Enter poster link"
              name="poster"
              id="poster"
              onChange={handleChange}
              value={formdata.poster}
            />
          </div>

          <div className="col-md-3">
            <label htmlFor="poster">trailer url </label>
            <Form.Control
              type="text"
              placeholder="Enter url trailer"
              name="trailer"
              id="trailer"
              onChange={handleChange}
              value={formdata.trailer}
            />
          </div>
        </div>

        <div className="validate">
          <Button type="submit" variant="danger">
            Add movie
          </Button>
        </div>
      </div>
    </form>
  );
}

export default Myform;

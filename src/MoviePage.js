import React from "react"
import popcorn from "./images/pop-corn.png"
import ReactPlayer from 'react-player/youtube'
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

function MoviePage() {

    const {index} = useParams();
    const {search}= useLocation();

    const params = new URLSearchParams(search)

    const description = params.get('description')

    const trailer = params.get('trailer')

    return (
        <div className="MoviePage">

            <div className="movieInformation">
                <img src={popcorn} />  <span><h2 style={{ color: "white" }}>Trailer & Description</h2></span > <img src={popcorn} />
            </div>

            <div className="trailerInformation">
                <div className="trailer">
                    <ReactPlayer url={decodeURIComponent(trailer)} />
                    
                </div>



            </div>
        </div>
    );
}



export default MoviePage
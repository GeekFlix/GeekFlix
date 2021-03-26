import React from 'react';

// import collagePelis from '../../assets/img/collagePelis.jpeg'
import collageMovies from '../../assets/img/collageMovies.jpg'

import './home.css'

const home = () => {
  return (
    <div className="homeContainer">
      <img className="imgMovie" alt="collage" src={collageMovies}/>
    </div>
  )
}

export default home

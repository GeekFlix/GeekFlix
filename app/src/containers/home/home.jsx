import React from 'react';

import collageMovies from '../../assets/img/collagePelis5.jpeg'

import './home.css'

const home = () => {
  return (
    <div className="homeContainer">
      <img src={collageMovies}/>
    </div>
  )
}

export default home

import React from 'react';

import collagePelis from '../../assets/img/collagePelis.jpeg'

import './home.css'

const home = () => {
  return (
    <div className="homeContainer">
      <img src={collagePelis}/>
    </div>
  )
}

export default home

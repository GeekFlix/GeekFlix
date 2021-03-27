import React from 'react';

import collageMovies from '../../assets/img/collageMovies.jpg';
// import Button from '../../components/button/button';
import ModalLogin from '../../components/loginModal/loginModal';

import './home.css';

const home = () => {

  return (
    <div className="homeContainer">
      <div>
        <div className="header">
        </div>
        <img className="imgMovie" alt="collage" src={collageMovies}/>
        <div className="loginContainer">
          <ModalLogin/>
        </div>
      </div>
    </div>
  )
}

export default home
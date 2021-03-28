import React from 'react';

import collageMovies from '../../assets/img/collageMovies.jpg';
// import Button from '../../components/button/button';
import ModalLogin from '../login/login';
import logo from "../../assets/img/geekflix-green.png";



const home = () => {

  return (
    <div className="homeContainer">
      <div>
        <div className="header">
          <div className="containerEmpty"></div>
          <div className="containerLogo">
            <div className="logo"><img src={logo} alt=""/></div></div>
          <div className="loginContainer">
          </div>
        </div>
        <img className="imgMovie" alt="collage" src={collageMovies}/>
        <div className="joinTv">
          <div className="textPrincipalJoinTv">
            <div className="textTitleJoinTv">Disfruta de GeekFlix en tu TV.</div>
            <div className="textSecundaryJoinTv">Smart TV, Playstation, Xbox, Chromecast, Apple TV, reproductores Blu-ray y muchos más.</div>
          </div>
          <div className="imageJoinTv">aqui va un video de youtube</div>
        </div>
        
      </div>
    </div>
  )
}

export default home
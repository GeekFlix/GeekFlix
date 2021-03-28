import React from 'react';

import collageMovies from '../../assets/img/collageMovies.jpg';


import logo from '../../assets/img/geekflix-green.png';
import { Link } from 'react-router-dom';
import Btn from '../../components/btn/btn';



const home = () => {

  return (
    <div className="homeContainer">
      <div>
        <div className="header">
          <div className="containerEmpty"></div>
          <div className="containerLogo">
            <div className="logo"><img src={logo} alt=""/></div></div>
          <div className="loginContainer">
            <Btn destiny="login" text="Iniciar sesión"/>
          </div>
        </div>
        <div className="textForRegister">
          <div className="textRegisterTitle"><h1>Todas las películas y series que desees y mucho más...</h1></div>
          <div className="textRegisterSubtitle"><h2>Disfruta donde quieras. Cancela cuando quieras.</h2></div>
          <div className="textRegisterFinal"><h4>...Pero para todo ello inicie sesión o <Link to="/register" className="styleLink">SUSCRIBANSE!!</Link></h4></div>
        </div>
        <img className="imgMovie" alt="collage" src={collageMovies}/>
        
        <div className="joinTv">
          <div className="textPrincipalJoinTv">
            <div className="textTitleJoinTv">Disfruta de GeekFlix en tu TV.</div>
            <div className="textSecundaryJoinTv">Smart TV, Playstation, Xbox, Chromecast, Apple TV, reproductores Blu-ray y muchos más.</div>
          </div>
          <div className="imageJoinTv">
            <div className="videoTrailer">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/SAHnPVcmvTI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>

        <div className="joinSeries">
          <div className="imageJoinSeries">
            <div className="seriesTrailer">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/GipNazWQuqY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
          <div className="textPrincipalJoinSeries">
            <div className="textTitleJoinSeries">Disfruta en todas partes de tus series favoritas.</div>
            <div className="textSecundaryJoinSeries">Reproduce en streaming todas las películas y series en tu móvil, tableta, ordenador y TV sin pagar más.</div>
          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default home
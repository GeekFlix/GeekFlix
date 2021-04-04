import React from 'react';
import Navbar from '../../components/navbar/navbar';
import logo from '../../assets/img/geekflix-green.png';





const Help = () => {

    return(
        
        <div className="containerHelp">
            <div className="headerHelp">
                <div className="containsHelpNavbar">
                    <Navbar/>
                </div>
                <div className="containsHelpLogo" >
                    <img src={logo} alt=""/>
                </div>
            </div>
            <div className="textHelp">

                <div className="textTitleHelp">¿Necesitas ayuda?</div>
                <div className="textExplainHelp">¡Ahora, ponerse en contacto con Geekflix es más fácil que nunca si lo haces desde la aplicación de Geekflix, entrando en cualquiera de los perfiles de nuestros desarrolladores le podrán ayudar en sus dudas y consultas de GeeFlix. <br/><br/>
                Clickea en las fotos!!</div>
            </div>
            <div className="helpPhotoDeveloper">
                <a href='https://github.com/LauraPorto' target="_blank"><img className='photoDevelopers'src='https://avatars.githubusercontent.com/u/77154578?v=4' alt='la_meiga'/></a>
                <a href='https://github.com/devian5' target="_blank"><img className='photoDevelopers'src='https://avatars.githubusercontent.com/u/51739196?v=4' alt='el_bueno'/></a>
                <a href='https://github.com/Alvaro-78' target="_blank"><img className='photoDevelopers'src='https://avatars.githubusercontent.com/u/53852335?v=4' alt='el_feo'/></a>
                <a href='https://github.com/Carlos-Val' target="_blank"><img className='photoDevelopers'src='https://avatars.githubusercontent.com/u/75422798?v=4' alt='el_guapo'/></a>
            </div>
            
        </div>
           
        
    )
};

export default Help
import axios from 'axios';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { RENT } from '../../redux/types/saveMovieType';
import { Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';


const Rental = (props) => {

    const history = useHistory();

    let body = {
        
        ownerId: props.user._id,
        movieId: props.saveMovie._id,
        price: ''
    };
    console.log(props.saveMovie)
    
    const sendRental = async () => {

        alert('Vas a alquilar esta serie/película')
        const result = await axios.post('http://localhost:3000/order', body)
        console.log("PUUUUM alquilado")
        props.dispatch({type: RENT, payload: result})
        console.log(result)
        return setTimeout(() => {history.push('/user-profile')}, 100);

    };
   

    return (
        <div >
            <div className="movieInfo">
                <div className="headerMovieInfo">
                </div>
                <div className="movieContainer">
                    <div className="pictureDiv">
                        <img src={props.saveMovie.posterUrl} alt='movie'></img>
                        <div className="buttonPosition">
                            <Button onClick={() => sendRental()}>Alquilar</Button>
                        </div>
                    </div>
                    <div className="dataStyle">
                        <div className="titleDiv">
                            Título: {props.saveMovie.title}
                        </div>
                        <div className="genresDiv">
                            Géneros: {props.saveMovie.genres}
                        </div>
                        <div className="actorsDiv">
                            Actores: {props.saveMovie.actors}
                        </div>
                        <div className="yearDiv">
                            Año: {props.saveMovie.year}
                        </div>
                        <div className="plotDiv">
                            Sinópsis: {props.saveMovie.plot}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        rentMovie: state.saveMovieReducer.rentMovie,
        saveMovie: state.saveMovieReducer.saveMovie,
        user: state.userReducer.user
    }
};


export default connect(mapStateToProps)(Rental)

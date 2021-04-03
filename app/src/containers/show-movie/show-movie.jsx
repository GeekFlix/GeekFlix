import React,{ useState }from 'react';
import { Button } from 'reactstrap';
// import { RENTALS } from '../../redux/types/userTypes';


const ShowMovie = (props) => {

    // const rentalMovie = (saveMovie) => {
    //     console.log(saveMovie)
    //     alert('Vas a alquilar esta serie/película')
    //     console.log("PUUUUM alquilado")
    //     props.dispatch({type: RENT, payload: saveMovie})
    //     console.log(props.rentMovie)
    // };

    return (
        <div >
            <div className="showMoviesContainer">
                <div className="headerShowMovie">
                    Tu película seleccionada es .....   
                </div>
                {/* <Button onClick={() => rentalMovie(props.saveMovie)}>Alquilar</Button> */}
                <div className="movieContainer">
                    <img src={props.saveMovie.posterUrl} alt='movie'></img>
                </div>
            </div>
        </div>
    );
};



export default ShowMovie

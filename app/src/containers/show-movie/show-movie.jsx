import React,{ useState }from 'react';
import { RENTALS } from '../../redux/types/userTypes';


const ShowMovie = (props) => {

    const [rental, setRental] = useState({
        rentalMovies: []
    });
    

    const rentalMovie = () => {

        props.dispatch({type: RENTALS, payload: rental})
        setRental({...rental, rentalMovies: rentalMovie})
    };

    return (
        <div className="showMoviesContainer">
            
    
        </div>
    );
};

export default ShowMovie

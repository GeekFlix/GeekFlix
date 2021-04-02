import React,{ useState }from 'react';
// import { RENTALS } from '../../redux/types/userTypes';


const ShowMovie = (props) => {

    const [rental, setRental] = useState({
        rentalMovies: []
    });
    

    const rentalMovie = () => {

        alert('Vas a alquilar esta serie/película')
        console.log("PUUUUM alquilado")
        // props.dispatch({type: RENTALS, payload: rental})
        // setRental({...rental, rentalMovies: rentalMovie})
    };

    return (
        <div >
            <div className="showMoviesContainer">
                <div className="headerShowMovie">
                    Tu película seleccionada es .....   
                </div>
                <Button onClick={() => rentalMovie()}>Alquilar</Button>
            </div>
    
        </div>
    );
};

export default ShowMovie

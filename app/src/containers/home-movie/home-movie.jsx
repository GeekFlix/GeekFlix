import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux'
//import { useHistory } from 'react-router';
import Carousel from '../../components/carousel/carousel';
//import Navbar from '../../components/navbar/navbar';
import axios from 'axios';
import {SHOW} from '../../redux/types/movieTypes.js';







const HomeMovie = (props) => {

    const [film, setFilm] = useState({
        movies: []
    })

    useEffect(()=>{

        getData();

    },[])

    const getData = async () =>{
        const filmCollection = await axios.get('http://localhost:3000/movie/');
        props.dispatch({type: SHOW, payload: filmCollection.data})
        console.log("peliculas", filmCollection.data.result);
        setFilm({
            ...film, movies: filmCollection.data
        });
    }
    

    if(!film.movies?.result){
        return (
            <div>
                <h1>Estamos en el primero</h1>
            </div>
        )
    }else{
        return(
        <div>
            <div>
            </div>
            {/* <Navbar/> */}
            {/* <Carousel/> */}
            <Carousel/>
                {/* {film.movies?.result.map(movie=>{
                    return (
                        <div>
                            <div>
                                <img src={movie.posterUrl} alt="pepe"/>
                            </div>
                        </div>
                    )
                })}
                */}
            <button onClick={()=>getData()}>Pulsa aqui</button>
            <h1>Estamos en el else</h1>
        </div>
    )
    }
    
    
    
 
}

const mapStateToProps = state=>{
    return{
        movie: state.movieReducer.movie
    }

}


export default connect (mapStateToProps)(HomeMovie)

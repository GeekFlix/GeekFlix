import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux'
// eslint-disable-next-line
import Carousel from '../../components/carousel/carousel';
//import Navbar from '../../components/navbar/navbar';
import axios from 'axios';
import {SHOW} from '../../redux/types/movieTypes.js';
import SearchEngine from '../../components/searchEngine/searchEngine';


const HomeMovie = (props) => {
    console.log(props.search,'PROPS MOVIE');
    const [film, setFilm] = useState({
        movies: [],
    })

    useEffect(()=>{

        getData();
        // eslint-disable-next-line
    },[])

    const getData = async () =>{
        const filmCollection = await axios.get('http://localhost:3000/movie/');
        props.dispatch({type: SHOW, payload: filmCollection.data})
        // console.log("peliculas", filmCollection.data.result);
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
        <div className="homeMovie">
            <SearchEngine/>
            <div>
                <div className="searchResult">
                    {
                        props.search.map(searchMovie => {
                            return (
                                <div key={searchMovie.id}>
                                    <img src={searchMovie.posterUrl} alt="picture"/> 
                                    <div className="titleMovie">
                                        Titulo : {searchMovie.title}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            {/* <Navbar/> */}
            {/* <Carousel/> */}
        </div>
    )
    }
}

const mapStateToProps = state=>{
    return{
        movie: state.movieReducer.movie,
        search: state.movieReducer.query
    }
}

export default connect (mapStateToProps)(HomeMovie)
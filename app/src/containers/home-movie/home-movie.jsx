import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'
// eslint-disable-next-line
import Carousel from '../../components/carousel/carousel';
import Navbar from '../../components/navbar/navbar';
import axios from 'axios';
import { SHOW } from '../../redux/types/movieTypes.js';
import SearchEngine from '../../components/searchEngine/searchEngine';
import { useHistory } from 'react-router-dom';
import { SAVE } from '../../redux/types/saveMovieType';
import { Button } from 'reactstrap';
import logo from '../../assets/img/geekflix-green.png';
import spinner from '../../assets/img/Half-Moon-Loading.svg'


const HomeMovie = (props) => {

    const [film, setFilm] = useState({
        movies: [],
    });

    const history = useHistory();

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

    const redirect = () => {
        return setTimeout(() => {
          history.push('/user-profile')
        }, 1000);

    };

    
    const saveMovie = (searchMovie, movie) => {
        console.log("presionando")
        const save = props.dispatch({type: SAVE, payload: searchMovie, movie});

        setTimeout(() => {history.push('/show-movie')}, 100);
        console.log(save)
    };

    if(!film.movies?.result){
        return (
            <div className="spinnerContainer">
                <img src={spinner} alt="spinner"/>
            </div>
        )
    }else{
        return(
            <div className="homeMovie">
                
                <div className="headerHomeMovie">
                    <div className="containsNavbar">
                        <Navbar/>
                    </div>
                    <div className="containsLogo" >
                        <img src={logo} alt=""/>
                    </div>
                    <div className="searchHeader">
                        <SearchEngine/>
                    </div>
                </div>
                <div className="containsSearch">

                    
                    
                    <div className="textHomeSearch">
                        BUSQUEDAS ANTERIORES:
                    </div>
                    <div className="searchResult">
                        {
                            props.search.map(searchMovie => {
                                return (
                                    <div onClick={()=> saveMovie(searchMovie)} key={searchMovie._id}>
                                        <img className="imageSearchHomeMovie" src={searchMovie.posterUrl} alt="picture"/> 
                                        <div className="titleMovie">{searchMovie.title}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <Carousel/>
            </div>
        )
    };
};

const mapStateToProps = state=>{
    return{
        movie: state.movieReducer.movie,
        search: state.movieReducer.query,
        saveMovie: state.saveMovieReducer.saveMovie
    };
};

export default connect (mapStateToProps)(HomeMovie)

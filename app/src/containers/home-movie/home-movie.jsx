
import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux'
// eslint-disable-next-line
import Carousel from '../../components/carousel/carousel';
import Navbar from '../../components/navbar/navbar';
import axios from 'axios';
import {SHOW} from '../../redux/types/movieTypes.js';
import SearchEngine from '../../components/searchEngine/searchEngine';
import { useHistory } from 'react-router-dom';
import {LOGOUT} from '../../redux/types/userTypes';
import { Button } from 'reactstrap';
import logo from '../../assets/img/geekflix-green.png';


const HomeMovie = (props) => {

    const [film, setFilm] = useState({
        movies: [],
    });

    const history = useHistory();

    const logOut =  () => {

        props.dispatch({type: LOGOUT, payload : {}});
    
        setTimeout(()=> {
            history.push('/');
        },300);
    };

    const showMovie = () => {
        setTimeout(() => {history.push('/show-movie')}, 100);
    };

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
                <img className="backgroundImage" src="https://i.blogs.es/fd5f1b/avengers-5-lo-que-sabemos/1366_521.jpeg" alt=""/>
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
                <Button className="btnStyle" onClick={()=> logOut()} className="btnStyle">Salir</Button>
                <div className="containsSearch">

                    
                    <Button className="btnStyle" onClick={()=> redirect()} className="btnStyle">Profile</Button>
                    <div className="textHomeSearch">
                        BUSQUEDAS ANTERIORES:
                    </div>
                    <div className="searchResult">
                        {
                            props.search.map(searchMovie => {
                                return (
                                    <div onClick={()=> showMovie(searchMovie)} key={searchMovie._id}>
                                        <img className="imageSearchHomeMovie"src={searchMovie.posterUrl} alt="picture"/> 
                                        <div className="titleMovie">
                                            Titulo : {searchMovie.title}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    
                    
                </div>
                
                <Carousel/>
                
            </div>
        )
    }
}

const mapStateToProps = state=>{
    return{
        movie: state.movieReducer.movie,
        search: state.movieReducer.query,
        user: state.userReducer.user
    };
};

export default connect (mapStateToProps)(HomeMovie)

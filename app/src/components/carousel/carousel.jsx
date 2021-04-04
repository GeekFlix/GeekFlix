import React, {useState} from 'react';
import {connect} from 'react-redux';
import { SAVE } from '../../redux/types/saveMovieType';
import { useHistory } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { A11y, EffectFade, Navigation, Pagination, Scrollbar, Zoom } from 'swiper/core';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/zoom/zoom.scss';


const Carousel = (props) => {

    const history = useHistory();

<<<<<<< HEAD
    // props.dispatch({type: RENTALS, payload: rental})

    const handleState = (event) => {
        setRental({...rental, rentalMovies: event})
    };
  

  

=======
    console.log('PROPSSSSS!!',props.movie);
>>>>>>> 11566772b15552a0c6b8d43b8f505d6e525ffe2e

    const thriller = props.movie.filter(objectMovie => objectMovie.genres.includes('Thriller'));
    const comedy = props.movie.filter(objectMovie => objectMovie.genres.includes('Comedy'));
    const animation = props.movie.filter(objectMovie => objectMovie.genres.includes('Animation'));
    const sport = props.movie.filter(objectMovie => objectMovie.genres.includes('Sport'));
    const biography = props.movie.filter(objectMovie => objectMovie.genres.includes('Biography'));
    const drama = props.movie.filter(objectMovie=> objectMovie.genres.includes('Drama'));
    const adventure = props.movie.filter(objectMovie=> objectMovie.genres.includes('Adventure'));
    
    SwiperCore.use([Navigation, Pagination, EffectFade, Scrollbar, A11y, Zoom]);
    

    const saveMovie = (picture) => {
        console.log("presionando")
        const save = props.dispatch({type: SAVE, payload: picture});

        setTimeout(() => {history.push('/show-movie')}, 100);
        console.log(save)
    };


    if(props?.result){
        return (
            <div>
                <h1>Estamos en el primero</h1>
            </div>
        )
    }else{
        return (
            <div className="mainCarousel">
                <div className="titleCarousel">Películas de Aventuras</div>                
                <div className="carouselAdventure">                     
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={7}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                            {adventure.map(picture => 
                                <SwiperSlide>
                                    <div onClick={()=> saveMovie(picture)} className="swiper-slide">               
                                        <img src={picture.posterUrl}/>
                                    </div>  
                                </SwiperSlide>
                            )};
                    </Swiper>
                </div>
                <div className="titleCarousel">Películas de Comedia</div>  
                <div className="carouselComedy">                     
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={7}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                            {comedy.map(picture => 
                                <SwiperSlide>
                                    <div onClick={()=> saveMovie(picture)} className="swiper-slide">               
                                        <img src={picture.posterUrl}/>
                                    </div>  
                                </SwiperSlide>
                            )};
                    </Swiper>
                </div>
                <div className="titleCarousel">Películas de Drama</div> 
                <div className="carouselDrama">                     
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={7}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                    >
                            {drama.map(picture => 
                                <SwiperSlide>
                                    <div onClick={()=> saveMovie(picture)} className="swiper-slide">               
                                        <img src={picture.posterUrl}/>
                                    </div>  
                                </SwiperSlide>
                            )};
                    </Swiper>
                </div>  
            </div>   
        )
    };
};

const mapStateToProps = state=>{
    return{
        movie: state.movieReducer.movie,
        user: state.userReducer.user
    };
};

export default connect (mapStateToProps)(Carousel)

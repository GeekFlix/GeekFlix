import React, {useState} from 'react';
import {connect} from 'react-redux';
// import { RENTALS } from '../../redux/types/userTypes';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { A11y, EffectFade, Navigation, Pagination, Scrollbar, Zoom } from 'swiper/core';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/components/zoom/zoom.scss';


const Carousel = (props) => {

    const [rental, setRental] = useState({
        rentalMovies: []
    });

    // props.dispatch({type: RENTALS, payload: rental})

    const handleState = (event) => {
        setRental({...rental, rentalMovies: event})
    };
    console.log(rental)

  
    console.log('PROPSSSSS!!',props.movie);

    const thriller = props.movie.filter(objectMovie => objectMovie.genres.includes('Thriller'));
    const comedy = props.movie.filter(objectMovie => objectMovie.genres.includes('Comedy'));
    const animation = props.movie.filter(objectMovie => objectMovie.genres.includes('Animation'));
    const sport = props.movie.filter(objectMovie => objectMovie.genres.includes('Sport'));
    const biography = props.movie.filter(objectMovie => objectMovie.genres.includes('Biography'));
    const drama = props.movie.filter(objectMovie=> objectMovie.genres.includes('Drama'));
    const adventure = props.movie.filter(objectMovie=> objectMovie.genres.includes('Adventure'));
    console.log(comedy, 'si quieres unas risas');
    
    SwiperCore.use([Navigation, Pagination, EffectFade, Scrollbar, A11y, Zoom]);
    
    if(props?.result){
        return (
            <div>
                
                <h1>Estamos en el primero</h1>
            
            </div>
        )
    }else{
        return (
            <div className="mainCarousel">
                <div className="titleCarouselAdventure">Películas de Aventuras</div>                
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
                                    <div className="swiper-slide">               
                                        <img src={picture.posterUrl}/>
                                    </div>  
                                </SwiperSlide>
                            )}
                    </Swiper>
                </div>
                <div className="titleCarouselComedy">Películas de Comedia</div>  
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
                                    <div className="swiper-slide">               
                                        <img src={picture.posterUrl}/>
                                    </div>  
                                </SwiperSlide>
                            )}
                    </Swiper>
                </div>
                <div className="titleCarouselDrama">Películas de Drama</div> 
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
                                    <div className="swiper-slide">               
                                        <img src={picture.posterUrl}/>
                                    </div>  
                                </SwiperSlide>
                            )}
                    </Swiper>
                </div>  
            </div>   
        )
    }
}

const mapStateToProps = state=>{
    return{
        movie: state.movieReducer.movie,
        user: state.userReducer.user
    };
};

export default connect (mapStateToProps)(Carousel)

import React from 'react';
import {connect} from 'react-redux'



const Carousel = (props) => {

    console.log('PROPSSSSS!!',props.movie);

    const section11 = props.movie.filter(objectMovie => objectMovie.genres.includes('Comedy'));

    console.log(section11,'MAL VAMOS!');
    
    if(props?.result){
        return (
            <div>
                <h1>Estamos en el primero</h1>
            </div>
        )
    }else{
        return ( 
            <div className="carouselContainer">
            
                <div className="wrapper">
                    <section id="section1">
                        <a href="#section3">{'<'}</a>
                            {props.movie.map(movie => 
                                <div className="item" key={movie.id}>
                                    
                                    <img src={movie.posterUrl}/>
                                </div>
                            )}
                            
                        <a href="#section2">{'>'}</a>
                    </section> 
                </div>
                
                {/* <div className="wrapper">
                    <section id="section1">
                        <a href="#section3">{'<'}</a>
                        <div className="item"><img src={props.movie} alt="MoviePEPE"/></div>
                        <div className="item"><img src="" alt=""/></div>
                        <div className="item"><img src="" alt=""/></div>
                        <div className="item"><img src="" alt=""/></div>
                        <a href="#section2">{'>'}</a>
                    </section>
                    <section id="section2">
                        <a href="#section1">{'<'}</a>
                        <div className="item"><img src="https://http2.mlstatic.com/D_NQ_NP_938875-MLM28841571312_112018-W.jpg" alt="Movie"/></div>
                        <div className="item"><img src="http://upload.wikimedia.org/wikipedia/an/5/55/Braveheart_imp.jpg" alt="Movie"/></div>
                        <div className="item"><img src="https://i.blogs.es/4ed49c/poster-pesadillas-goosebumps-con-jack-black/450_1000.jpg" alt="Movie"/></div>
                        <div className="item"><img src="https://yestorrent.net/wp-content/uploads/2020/04/lGv19gokQvgC7jgjWqapIachnxU-1.jpg" alt="Movie"/></div>

                        <a href="#section3">{'>'}</a>
                    </section>
                    <section id="section3">
                        <a href="#section2">{'<'}</a>
                        <div className="item"><img src="https://ep00.epimg.net/elpais/imagenes/2020/02/06/album/1580999639_454991_1581004466_album_normal.jpg" alt="Movie"/></div>
                        <div className="item"><img src="https://e00-elmundo.uecdn.es/television/programacion-tv/img/v2/programas/02/208642.png" alt="Movie"/></div>
                        <div className="item"><img src="http://www.caratulasylogos.com/wp-content/uploads/titanic-1-320x240.jpg" alt="Movie"/></div>
                        <div className="item"><img src="https://3.bp.blogspot.com/-wLLDklb-AHQ/V5Gt0FZebgI/AAAAAAAABLI/5NLMTLQesUQYXgpJ33Jo_UzaTh5KfIlsQCLcB/s1600/Poster.jpg" alt="Movie"/></div>

                        <a href="#section1">{'>'}</a>
                    </section>
                </div> */}
            </div>
        )
    }
}

const mapStateToProps = state=>{
    return{
        movie: state.movieReducer.movie
    }

}

export default connect (mapStateToProps)(Carousel)
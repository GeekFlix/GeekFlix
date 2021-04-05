import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


const UserMovie = (props) => {

    const [rentals, setRentals] = useState({
        listRentals : []
    });
    console.log(props)
    const userId = props.user._id
    
    const token = props.token;
    const config = {
        headers: { 
            'authorization': `token ${token}` 
        }
    }

    useEffect(() => {
        showRental()
    }, [])

    const url = (`http://localhost:3000/order/user/${userId}`, config)

    console.log(url)

    const showRental = async () => {

        let collectionRentals = await axios.get(`http://localhost:3000/order/user/${userId}`, config)

        setRentals({
            ...rentals, listRentals: collectionRentals.data.result
        });
        console.log(collectionRentals.data.result)
    };


    return (
        <div className="userMovieContainer">
            <div className="rentalsContainer">
                Lista de Alquileres
                {
                    !rentals.listRentals
                    ?
                    <>
                        <div>
                            "No rentals yet"
                        </div>
                    </>
                    :
                    <>
                        <div>
                            {
                                rentals.listRentals.map(rentTitle => {
                                    
                                    return(
                                        <div className="rentData" key={rentTitle._id}>
                                            <div>{rentTitle.title}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        token: state.userReducer.token
    }
}

export default connect(mapStateToProps)(UserMovie);

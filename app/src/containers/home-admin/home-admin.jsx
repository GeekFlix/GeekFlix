import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import {useHistory} from 'react-router-dom';

import { ADMINLOGOUT } from '../../redux/types/adminTypes';

const HomeAdmin = (props) => {

    let history = useHistory()

    const [users, setUsers] = useState({
        listUsers : []
    });

    const [rentals, setRentals] = useState({
        listRentals : []
    });

    const [userRental, setUserRental] = useState({
        listUserRental: []
    });

    useEffect(() => {
        showRental()
    }, [])

    const logOut =  () => {

        props.dispatch({type: ADMINLOGOUT, payload : {}});
    
        setTimeout(()=> {
            history.push('/');
        },300);
    };

    const showUsers = async () => {

        let collectionUsers = await axios.get('http://localhost:3000/user')
        
        setUsers({
            ...users,listUsers: collectionUsers.data.result
        })
    };

    const showRental = async () => {

        let collectionRentals = await axios.get('http://localhost:3000/order')

        setRentals({
            ...rentals, listRentals: collectionRentals.data.result
        });
        console.log(collectionRentals)
        // const saveUserId = collectionRentals.data.result[0].ownerId
        // const saveUserId = collectionRentals.data.result[0].ownerId
        
        // setUserId({
        //     ...userId, listUserId: saveUserId
        // });
        const saveUserId = collectionRentals.data.result.map(rent => rent.ownerId )
        
        console.log(saveUserId)
        
        mapOwnerId()
        // getUserByRental(saveUserId)
    };

    const mapOwnerId = () => {

        console.log("que tiene rentals???",rentals.listRentals)
        const pepe = rentals.listRentals.map(rent => rent.ownerId )
        console.log(pepe)

    }



    
    const getUserByRental = async (userId) => {

        let collectionUserByRental = await axios.get(`http://localhost:3000/user/${userId}`)
        console.log(collectionUserByRental)
        setUserRental({
            ...userRental, listUserRental: collectionUserByRental.data.result
        });
        // console.log("Sabedecirte",listUserRental)
    };

    
    const deleteUser = async (user) => {

        const selectUser = window.confirm('You are about to delete this user, are you sure?');

        if(selectUser === true){
             await axios.delete(`http://localhost:3000/user/${user._id}`)
            showUsers()
        };
    };

    const deleteRental = async (rent) => {

        const selectUser = window.confirm('You are about to delete this rent, are you sure?');

        if(selectUser === true){
             await axios.delete(`http://localhost:3000/order/${rent._id}`)
            // showRental()
        };
        console.log(deleteRental)
    };


    if(props.admin?.email) {
        return(
            <div className="containerAdmin">
                <div className="headerAdmin">
                <div>
                        <Button className="btnStyle" onClick={()=> logOut()} className="btnStyle">Salir</Button>
                    </div>
                    <div className="nameStyle">
                        {props.admin.userName}
                    </div>
                    <div>
                        <Button className="btnStyle" onClick={()=> showUsers()} className="btnStyle">Mostrar usuarios</Button>
                    </div>
                    <div>
                        <Button className="btnStyle" onClick={()=> showRental()} className="btnStyle">Mostrar alquileres</Button>
                    </div>
                </div>
                <div className="usersContainer">
                    {
                        !users.listUsers
                        ?
                        <>
                            <div>
                                "Get Out fucking nigga"
                            </div>
                        </>
                        :
                        <>
                            <div>
                                {
                                    users.listUsers.map(user => {

                                        return(
                                            <div className="userData" key={user.userName}>
                                                <div onClick={() => deleteUser(user)}  className="showData id">ID del usuario: {user._id}</div>
                                                <div className="showData">Nombre de usuario: {user.userName}</div>
                                                <div className="showData">Email: {user.email}</div><br></br>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </>
                    }
                </div>
                <div className="rentalsContainer">
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
                                    rentals.listRentals.map(rent => {

                                        return(
                                            <div className="userData" key={rent}>
                                                <div onClick={() => deleteRental(rent)}  className="showData id">ID del alquiler: {rent._id}</div>

                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </>
                    }
                </div>
                {/* <div className="rentalsContainer">
                    {
                        !userRental.listUserRental
                        ?
                        <>
                            <div>
                                "No user rental yet"
                            </div>
                        </>
                        :
                        <>
                            <div>
                                {
                                    userRental.listUserRental.map(renderUser => {

                                        return(
                                            <div className="userData" key={renderUser}>
                                                <div onClick={() => deleteRental(renderUser)}  className="showData id">Nombre de usuario que alquiler: {renderUser.userName}</div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </>
                    }
                </div>         */}
            </div>
        )
    }else {
        return (
            <div>
                No eres el Admin mejor te piras...Plata o Plomo!!!
            </div>
        )
    }
    
};

const mapStateToProps = state => {
    return {
        admin : state.adminReducer.admin,
    }
};
  
  export default connect(mapStateToProps)(HomeAdmin)


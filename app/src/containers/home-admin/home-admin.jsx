import React, { useState } from 'react';
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

    const logOut =  () => {

        props.dispatch({ type: ADMINLOGOUT, payload : {}});
    
        setTimeout(()=> {
            history.push('/');
        },300);
    };

    const showUsers = async () => {

        let collectionUsers = await axios.get('http://localhost:3000/user')
        
        setUsers({
            ...users,listUsers: collectionUsers.data.result
        })
        console.log(collectionUsers.data)
    };
    
    const deleteUser = async (user) => {

        const selectUser = window.confirm('You are about to delete this user, are you sure?');

        if(selectUser === true){
            let result = await axios.delete(`http://localhost:3000/user/${user._id}`)
            showUsers()
        };
    };

    if(!props.admin.useName) {

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
                </div>
                <div>
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
                                            <div onClick={() => deleteUser(user)} className="userData" key={user.userName}>
                                                <div className="showData id">ID del usuario: {user._id}</div>
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
            </div>
        )
    }else {
        return (
            <div>
                No eres el Admin mejor te piras
            </div>
        )
    }
    
};

const mapStateToProps = state => {
    return {
      admin : state.adminReducer.admin,
      user : state.userReducer.user
    }
  };
  
  export default connect(mapStateToProps)(HomeAdmin)


  //     if(props.admin.userName) {
//         console.log(users.listUsers.result)
//         return (
//             <div className="containerAdmin">
//                 <div className="headerAdmin">
//                     <div>
//                         <Button className="btnStyle" onClick={()=> logOut()} className="btnStyle">Salir</Button>
//                     </div>
//                     <div className="nameStyle">
//                         {props.admin.userName}
//                     </div>
//                     <div>
//                         <Button className="btnStyle" onClick={()=> showUsers()} className="btnStyle">Mostrar usuarios</Button>
//                     </div>
//                 </div>
//                 <div>
//                 </div>
//             </div>
//         )
        
//     }else {
//         return (
//             <div>
//                 No eres el Admin mejor te piras
//             </div>
//         )
//     }



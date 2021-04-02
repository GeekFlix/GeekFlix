import React from 'react';
import {useHistory} from 'react-router-dom';


const Btn = (props) => {

let history = useHistory();

const give = () =>{
    history.push(`/${props.destiny}`);
};

    return(
        <div onClick={() => give()}>
            {props.text}


        </div>
    );
};

export default Btn;
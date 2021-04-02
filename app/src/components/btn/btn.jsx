import React from 'react';
import {useHistory} from 'react-router-dom';


const Btn = ({destiny, text}) => {

let history = useHistory();

const give = () =>{
    history.push(`/${destiny}`);
};

    return(
        <div onClick={() => give()}>
            {text}

        </div>
    );
};

export default Btn;
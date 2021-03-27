import React from 'react';

import './button.css';

const Button = (props) => {
  return (
    <div className="button" onClick={props.clickOne}>Añadir</div>
  )
}

export default Button
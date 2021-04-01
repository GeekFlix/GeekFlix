import React, {createContext, Component} from 'react';
import {FormCtx} from './Form';

const FormCtx = createContext({
  fields: {}, 
  errors: {}
});

class Form extends Component {
  state = {
    fields: {}, 
    errors: {}
  };

  setFields = (event, {id}) => {
    event.persist();

    console.log('add/update field value')
  }

  render () {

    const {fields, errors} = this.state;

    const formCtx = {
      fields, 
      errors, 
      setFields: this.setFields
    }
    return (
      <form action="">
        <FormCtx.Provider value ={formCtx}>
          {this.props.children}
        </FormCtx.Provider>
      </form>

    )

  }
}



export default Form;
// export FormCtx







// const Input = (props) => {
//   return (
//     <div>
//       <p>{props.title}</p>
//         <input className="input" type={props.type} 
//         placeholder={props.placeholder} 
//         maxLength={props.maxLength} 
//         name={props.name}  
//         onChange={props.onChange}
//       />
//     </div>
//   )
// }

// export default Input

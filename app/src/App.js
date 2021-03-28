import {BrowserRouter, Switch, Route} from 'react-router-dom';
//import Navbar from './components/navbar/navbar';
import Home from './containers/home/home';
import Register from './containers/Register/Register';
import payment from './containers/payment/payment';
import Payment from './containers/payment/payment';


import './App.css';
import './css/main.css';
import LoginRegister from './containers/login-register/loginRegister';


function App() {
  return (

    <div className="App">
      
      <BrowserRouter>
        {/* <Navbar/> */}
        <Switch>

          <Route path='/' exact component={Home}/>
          <Route path='/register' exact component={Register}/>
          <Route path='/payment' exact component={Payment}/>
          <Route path='/loginregister' exact component={LoginRegister}/>
        </Switch>
      
      </BrowserRouter>
      
    </div>
  );
};

export default App;

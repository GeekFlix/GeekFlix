import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './containers/home/home';
import Register from './containers/Register/Register';
import Payment from './containers/payment/payment';
import Login from './containers/login/login';


import './App.css';
import './css/main.css';
import LoginRegister from './containers/login-register/loginRegister';
import HomeMovie from './containers/home-movie/home-movie';



function App() {
  return (

    <div className="App">
      
      <BrowserRouter>
        
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/register' exact component={Register}/>
          <Route path='/payment' exact component={Payment}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/loginregister' exact component={LoginRegister}/>
          <Route path='/homemovie' exact component={HomeMovie}/>
        </Switch>
      
      </BrowserRouter>
      
    </div>
  );
};

export default App;

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './containers/home/home';
import Register from './containers/register/register';
import Payment from './containers/payment/payment';
import Login from './containers/login/login';
import HomeMovie from './containers/home-movie/home-movie';
import HomeAdmin from './containers/home-admin/home-admin';


import './App.css';
import './css/main.css';
import HomeMovie from './containers/home-movie/home-movie';
import UserProfile from './containers/userProfile/userProfile';



function App() {
  return (

    <div className="App">
      
      <BrowserRouter>
        
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/register' exact component={Register}/>
          <Route path='/payment' exact component={Payment}/>
          <Route path='/login' exact component={Login}/>
          <Route path='/home-movie' exact component={HomeMovie}/>
          <Route path='/home-admin' exact component={HomeAdmin}/>
          <Route path='/user-profile' exact component={UserProfile}/>
        </Switch>
      
      </BrowserRouter>
      
    </div>
  );
};

export default App;

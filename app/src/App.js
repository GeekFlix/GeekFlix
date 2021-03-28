import {BrowserRouter, Switch, Route} from 'react-router-dom';
//import Navbar from './components/navbar/navbar';
import Home from './containers/home/home';
import Register from './containers/Register/Register';
import Payment from './containers/payment/payment';
import Login from './containers/login/login';


import './App.css';
import './css/main.css';


function App() {
  return (

    <div className="App">
      
      <BrowserRouter>
        {/* <Navbar/> */}
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/register' exact component={Register}/>
          <Route path='/payment' exact component={Payment}/>
          <Route path='/login' exact component={Login}/>
        </Switch>
      
      </BrowserRouter>
      
    </div>
  );
};

export default App;

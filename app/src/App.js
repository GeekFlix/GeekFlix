import {BrowserRouter, Switch, Route} from 'react-router-dom';
//import Navbar from './components/navbar/navbar';


import './App.css';
import Home from './containers/home/home';


import './css/main.css';
import Register from './containers/Register/Register';
import payment from './containers/payment/payment';

function App() {
  return (

    <div className="App">
      
      <BrowserRouter>
        {/* <Navbar/> */}
        <Switch>

          <Route path='/' exact component={Home}/>
          <Route path='/register' exact component={Register}/>
          <Route path='/payment' exact component={payment}/>
        </Switch>
      
      </BrowserRouter>
      
    </div>
  );
};

export default App;

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar/navbar';


import './App.css';
import Home from './containers/home/home';


import './css/main.css';
import Register from './containers/Register/Register';

function App() {
  return (

    <div className="App">
      
      <BrowserRouter>
        <Navbar/>
        <Switch>

          <Route path='/' exact component={Home}/>
          <Route path='/' exact components={Register}/>

        </Switch>
      
      </BrowserRouter>
      
    </div>
  );
};

export default App;

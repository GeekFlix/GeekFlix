import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar/navbar';


import './App.css';
import Home from './home/home';


import './css/main.css';

function App() {
  return (

    <div className="App">
      
      <BrowserRouter>
        <Navbar/>
        <Switch>

          <Route path='/' exact component={Home}/>

        </Switch>
      
      </BrowserRouter>
      
    </div>
  );
};

export default App;

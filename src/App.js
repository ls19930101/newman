import React,{Component} from 'react';
import {GlobalStyle} from './style';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render(){
    return (
      <div >
        <GlobalStyle/>
          <BrowserRouter>
           <Route exact path='/' component={Home}></Route>
           <Route exact path='/detail' component={Detail}></Route>
          </BrowserRouter>
      </div>
    )
  }
}

export default App;

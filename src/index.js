import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './comments/App';
import Container from './comments/container';
import Jiesuan from './comments/jiesuan';
import Jilu from './comments/jilu';
import Detail from './comments/detail';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Container}/>
      <Route path='/jiesuan/:num/:index' component={Jiesuan}></Route>
      <Route path="/jilu/:index/:num" component={Jilu}></Route>
      <Route path="/detail/:index" component={Detail}></Route>
    </Route>




  </Router>


  , document.getElementById('root'));


import React from 'react';
import './App.css';
import Nav from './component/Nav/Nav';
import { Redirect, Route, Switch } from 'react-router-dom';
import Signup from './component/Signup/Signup';
import Home from './component/Home/Home';
import Category from './component/Category/Category';
import Item from './component/Item/Item';
import Profile from './component/Profile/Profile';
import { useSelector } from 'react-redux';

const App: React.FC = () =>  {
  const users: any = useSelector<any>(state => state.users)

  
  
  return (
    <div>
      <Switch>
        <Route path='/signup' component={Signup} />
        <Route path='/' component={Nav} /> 
      </Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/category/:id' component={Category}/>
      <Route path='/item/:id' component={Item} />
      <Route path='/profile/:id'>
          {!users.isAuth ? <Redirect to={'/'}/> : <Profile />} 
      </Route>
    </div>
  );
}

export default App;

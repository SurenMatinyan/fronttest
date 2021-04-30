import React, { useState } from 'react';
import classes from './Nav.module.css';
import Upper from './Upper/Upper';
import Lower from './Lower/Lower';
import Login from './Login/Login';



const Nav: React.FC = () => {

    const [isLogin, setIsLogin] = useState<boolean>(false)
    
    return(
        <div className={classes.display}>
            <Upper setIsLogin={setIsLogin} />
            <Lower />
            <Login isLogin={isLogin}  setIsLogin={setIsLogin}/>
        </div>
    )
}

export default Nav;
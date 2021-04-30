import React from "react";
import classes from './Upper.module.css';
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import {NavLink} from 'react-router-dom';
import  ProfileNav from './PorfileNav/ProfileNav';
import {IReducer} from '../../../interface/interface'

interface PropsType {
    setIsLogin: (bol: boolean) => void
}

const Upper: React.FC<PropsType> = (props) => {
    const history = useHistory();
    const users: any = useSelector<IReducer>(state => state.users);
    return(
        <div className={classes.display}>
           <div className={classes.logo}>
                <NavLink to={'/'}>LOGO</NavLink>
           </div>
            <div className={classes.search}>
                <input type="text" placeholder="search"/>
                
            </div>
            {!users.isAuth ?
            <div className={classes.block3}>
                <button onClick={ () => { props.setIsLogin(true) } }>SIGN IN</button>
                <button onClick={ () => { history.push('/signup')} }>SIGN UP</button>
            </div>
            : <ProfileNav users={users}/>   
        }
            
            
        </div>
    )
}


export default Upper;
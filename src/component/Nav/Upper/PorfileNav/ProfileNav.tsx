import React from 'react';
import classes from './ProfileNav.module.css';
import {IUsers} from '../../../../interface/interface'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUsersAC } from '../../../../redux/usersReducer';
import iconuser from '../../../../img/usericon.jpg'

const ProfileNav: React.FC<any> = ({users}) => {
    const setUsers = useDispatch();

    const logout = () => {
        sessionStorage.removeItem('token');
        setUsers(setUsersAC({lastName: null, firstName: null, email: null, isAuth: false}));
    }

    const history = useHistory();
    return(
        <div className={classes.baner}>
             <div className={classes.users}>
                   <div className={classes.userinfo}>
                        <img  src={iconuser} alt=""/>
                        <div>{users.lastName}</div>
                   </div>
                <div className={classes.drob}>
                    <button onClick={()=>{history.push('/profile/my')}}>PROFILE</button>
                    <button onClick={ () => {logout()}}>LOG OUT</button>
                </div>
             </div>
             
        </div>
    )
}

export default ProfileNav;
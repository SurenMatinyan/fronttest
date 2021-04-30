import React, { useState } from 'react';
import classes from './Login.module.css';
import {URL} from '../../../URL';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setUsersAC } from '../../../redux/usersReducer';
import { IUsers } from '../../../interface/interface';
import { AppStateType } from '../../../redux/state-redux' 

interface Login {
    isLogin: boolean
    setIsLogin: (bool: boolean) => void 
}

interface IToken extends IUsers {
    token: string 
}


const Login: React.FC<Login> = (props) => {

    const history = useHistory();
    const result = useSelector<AppStateType>(state => state.users)
    const setUsers: any = useDispatch<any>()
    

    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const submit = (e: React.FormEvent) => {
        e.preventDefault()
        fetch(`${URL}/users/login`, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: login, password}),
        })
            .then(res => res.json())
            .then((res: IToken )=> {
                setUsers(setUsersAC({...res, isAuth: true}));
                sessionStorage.setItem('token', res.token);
                props.setIsLogin(false);
            })
            .catch(err => console.log(err));
    }

    return(
        <div style={{display: props.isLogin ? "block" : "none"}}>
            <div className={classes.displayBlack}></div>
            <div className={classes.login} >
                <button className={classes.close} onClick={ () => { props.setIsLogin(false) } }>X</button>
                <div>
                    <form className={classes.form}>
                            <input value={login} onChange={ (e) => setLogin(e.target.value) } type="text" placeholder='login'/>
                            <input value={password} onChange={ (e) => setPassword(e.target.value) } type="text" placeholder='password'/>
                        <button onClick={ (e) => submit(e)}>LOGIN</button>
                        <button onClick={ () => {history.push('/signup')}}>SIGN UP</button>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default Login
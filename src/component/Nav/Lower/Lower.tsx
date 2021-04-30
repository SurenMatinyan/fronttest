import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {NavLink } from 'react-router-dom';
import classes from './Lower.module.css';
import { AppStateType } from '../../../redux/state-redux';
import { setCategoryAC } from '../../../redux/categoryReducer'
const URL = 'http://localhost:3001'




const Lower: React.FC = () => {

    const category = useSelector((state: AppStateType)  => state.category);
    const setCategory = useDispatch();
    useEffect(() => {
        fetch(URL + '/category/getcategory')
            .then(res => res.json())
            .then(res => {
                setCategory(setCategoryAC(res));
            })
            .catch(err => console.log(err));
    }, [])
    return(
        <div id={classes.display}>
            <div style={{margin: "0px 70px"}}>
            { category.map(el => 
             <div key={el.id} className={classes.drob}>
                <p><NavLink className={classes.url} to={`/category/${el.id}`}>{el.name.toUpperCase()}</NavLink></p>
                <div className={classes.drobContent}>
                   {el.Parents.map(el => <div key={el.id}><NavLink className={classes.url} to={`/category/${el.id}`}>{el.name.toUpperCase()}</NavLink></div>)}
                </div>
            </div>) } 
            </div>
        </div>
    )
}

export default Lower;
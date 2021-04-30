import React from 'react';
import classes from './Style.module.css';
import avatart from '../../../img/usericon.jpg';

interface INumber {
    isNumber: boolean
    setIsNumber: (bool: boolean) => void
    number: string | undefined
    user: string | undefined
}

const Number: React.FC<INumber> = (props) => {
    console.log(props.isNumber)
    return(
        <div style={{display: props.isNumber ? "block":"none"}} className={classes.continer}>
            <div className={classes.top}>
                <div className={classes.call} style={{fontWeight: "bold", fontSize: "20px"}}>Сall user</div>
                <button className={classes.exit} onClick={()=>{props.setIsNumber(false)}}>X</button>  
            </div>
            <div className={classes.avatar}>
                 <img style={{width: "60px", borderRadius: "50%", margin: "auto"}} src={avatart } alt=""/>
            </div>
            <div style={{margin: "20px 0px", textAlign: "center"}}>{props.user}</div>
            <div className={classes.info}>{props.number}</div>
        </div>
    )
}

export default Number;
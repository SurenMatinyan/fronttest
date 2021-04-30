import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import {URL} from '../../URL';
import classes from './Item.module.css';
import avatar from '../../img/usericon.jpg';
import Number from './Handler/Number';


interface IItem {
    name: string
    price: number
    count: number
    img: string
    User: {
        id: number
        lastName: string
        email: string
    }
}

const Item: React.FC = () => {

    const params: any = useParams();

    const[isNumber, setIsNumber] = useState<boolean>(false);
    const[isMessage, setIsMessage] = useState<boolean>(false);
   
    const [item , setItem] = useState<IItem>();
    console.log(item);
    useEffect(() => {
        fetch(`${URL}/product/${params.id}`)
            .then(res => res.json())
            .then((res: IItem) => setItem(res))
            .catch(err => console.log(err.message));
    }, [])


    return(
        <div className={classes.screen}>
           <div className={classes.continer}>
                <div className={classes.item}>
                    <div className={classes.imgcontiner}>
                        <img src={`${URL}/${item?.img}`} alt=""/>
                    </div>
                    <div className={classes.iteminfo}>
                        <div className={classes.iteminfoitem}>
                            <div>Price</div>
                            <div style={{ fontWeight: "bold"}}>{item?.price}$</div>
                        </div >
                        <div className={classes.iteminfoitem}>
                            <div>Name</div>
                            <div style={{ fontWeight: "bold"}}>{item?.name.toUpperCase()}</div>
                        </div >
                        <div className={classes.iteminfoitem}>
                            <div>Count</div>
                            <div style={{ fontWeight: "bold"}}>{item?.count}</div>
                        </div >
                    </div>
                </div>
                <div className={classes.infocontiner}>
                    <div className={classes.infobutton}>
                        <img style={{width: "60px", borderRadius: "50%"}} src={avatar} alt=""/>
                        <p>{item?.User.lastName}</p>
                        <button onClick={() => {setIsNumber(true)}}>NUMBER</button><br/>
                        <button>SEND MESSAGE</button>
                    </div>
                </div>
            </div>
            <Number isNumber={isNumber} setIsNumber={setIsNumber} user={item?.User.lastName} number={item?.User.email}/>
        </div>  
    )
}

export default Item;
import React, { useEffect, useState } from 'react';
import classes from './Profile.module.css';
import {NavLink, useHistory, useParams} from 'react-router-dom';
import {URL} from '../../URL';
import Message from './Message/Message';
import Setting from './Setting/Setting';
import Add from './Add/Add';

interface IMproduct {
    id: number
    name: string
    price: number
    count: number
    img: string
}


const Profile: React.FC = () => {

    const [myProduct, setMyProduct] = useState<IMproduct[]>([]);
    const params: any = useParams();

    useEffect(()=> {
        fetch(`${URL}/users/product`, {
         headers: {authorization: sessionStorage.getItem('token')} as any
            })
            .then(res => res.json())
            .then((res: IMproduct[]) => setMyProduct(res))
            .catch(err => console.log(err.message));
    }, [])
    return(
        <div className={classes.continer}>
            <div className={classes.navbar}>
                <NavLink to={'/profile/my'}>PROFILE</NavLink>
                <NavLink to={'/profile/add'}>ADD PRODUCT</NavLink>
                <NavLink to={'/profile/message'}>MESSAGE</NavLink>
                <NavLink to={'/profile/setting'}>SETTING</NavLink>
            </div>
            <div className={classes.bodycontiner}>
                {params.id === "add" && <Add />}
                {params.id === "message" && <Message />}
                {params.id === "setting" && <Setting />}
               
                {params.id === "my" && myProduct.map(el => 
                    <div key={el.id} className={classes.myproductcontiner}>
                            <img src={`${URL}${el.img}`} alt=""/>
                            <div className={classes.infocontiner}>
                                  <div className={classes.info}>
                                      <div>
                                         name {el.name}
                                      </div>
                                      <div>
                                         price {el.price} $ 
                                      </div>
                                  </div>
                                <div className={classes.redaction}>
                                    <button style={{color: "blue", fontSize: "20px"}}>R</button>
                                    <button style={{color: "red", fontSize: "20px"}}>X</button>
                                </div>
                            </div>
                    </div>)}
            </div>
        </div>
    )
}


export default Profile;
import classes from './Category.module.css';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import {URL} from '../../URL';
import { NavLink } from 'react-router-dom';

interface IProduct {
    id: number
    name: string
    price: number
    img: string
    count: number
}

interface ICat { 
    id: number
    name: string
    Products: IProduct[]
}


interface IParams { 
    id: string
}


const Category: React.FC = () => {
   

    const history = useHistory();
    const params = useParams<IParams>();

    const [product, setProduct] = useState<ICat>();
    useEffect(() => {
        fetch(`${URL}/product/category/${params.id}`)
            .then(res => res.json())
            .then((res: ICat) => res.Products[0] ? setProduct(res) : history.push('/'))
            .catch(err => console.log(err));
    }, [params])

    return(
        <div className={classes.continer}>
            <div className={classes.sidebar}>
                    <div className={classes.changeprice}>
                        <div>
                            price
                        </div>
                        <div>
                            <input type="text" placeholder="min"/>
                            <input type="text" placeholder="max"/>
                        </div>
                    </div>
                    <div className={classes.cat}>
                            
                    </div>
            </div>
            <div className={classes.productcontiner}>
                { product?.Products.map(el =>  
                    <NavLink className={classes.url} to={`/item/${el.id}`} key={el.id}>
                        <img src={`${URL}${el.img}`} alt=""/>
                        <div className={classes.infocontiner}> 
                            <div className={classes.name}>
                                {el.name}
                            </div>
                            <div className={classes.price}>
                                ${el.price}
                            </div>
                        </div>
                    </NavLink>) }
            </div>       
        </div>
    )
}

export default Category
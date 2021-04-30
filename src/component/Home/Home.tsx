import React, { useEffect, useState } from 'react';
import { URL } from '../../URL';
import classes from './Home.module.css';
import {NavLink} from 'react-router-dom';

interface IProducts { 
    id: number
    name: string
    Products: {
        id: number
        name: string
        price: number
        img: string
    }[]
}


const Home: React.FC = () => {

    const [products, setProducts] = useState<IProducts[]>([{id: 1, name: "Asd", Products:[ {id: 1, name: "AR", price: 123, img: "ASd" }]}]);
    useEffect(() => {
        fetch(`${URL}/product/allproduct`)
            .then(res => res.json())
            .then((res: IProducts[]) => setProducts(res));
    }, [])

    console.log(products)
    return(
       
        <div className={classes.continer}>
            {products.map(el => <div key={el.id} className={classes.parent}>
                <div className={classes.category}>
                    <p>{el.name.toUpperCase()}</p>
                </div>
                <div className={classes.productcontiner}>
                    {el.Products.map(el => <NavLink key={el.id} to={`/item/${el.id}`} className={classes.product}>
                        <img src={URL + el.img} alt=""/>
                        <div className={classes.info}> 
                            <p style={{fontWeight: "bold"}}>${el.price}</p>
                            <p>{el.name}</p>
                        </div>
                    </NavLink>)}
                </div>
            </div>)}
        </div>
    )
}


export default Home;
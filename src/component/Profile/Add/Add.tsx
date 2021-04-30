import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classes from './Add.module.css';
import { AppStateType } from '../../../redux/state-redux';
import { Formik, Field, Form } from 'formik';
import { URL } from '../../../URL';

interface IOptions {
    value: number
    label: string
}

const Add: React.FC = () => {
    const [parent, setParent] = useState<number | null>(null);
    const [ParentId, setParentId] = useState<number | null>(null)
    const category = useSelector((state: AppStateType) => state.category);
    const formData = new FormData()
    const imgData = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.files && formData.append("img", event.target.files[0])
    }



console.log(ParentId)

    return(
        <div>
            <p>CHANGE CATEGORY</p>
            <div className={classes.category}>
                <div className={classes.cat}>
                <select onChange={(e) => {setParent(parseInt(e.target.value))}}>
                      {category.map(el =>  <option key={el.id} value={el.id}>{el.name}</option>)}
                </select>
                <select onChange={(e) => {setParentId(parseInt(e.target.value))}}> 
                    {category.find(el => el.id === parent)?.Parents.map((el: any) => <option key={el.id} value={el.id}>{el.name}</option>)}
                </select>
                </div>
            </div>
            <div className={classes.formik}>
              <Formik
                  initialValues={{ name: '', price: '', count: ''}}
                    onSubmit={(values) => {
                      formData.append("name", values.name)
                      formData.append("price", values.price)
                      formData.append("count", values.count);
                      formData.append("ParentId", ParentId!.toString());
                       fetch(`${URL}/users/createproduct`,{
                        method: "POST",
                        headers: {
                          authorization: sessionStorage.getItem('token')} as any,
                          body: formData
                      })
                          .then(res => res.json())
                          .then(res => console.log(res))
                          .catch(err => console.log(err.message));
                     }}
                  >
                    {
                      <Form className={classes.form}>
                          <Field type="text" name="name" placeholder="name"/>
                          <Field type="text" name="price" placeholder="price"/>
                          <Field type="text" name="count" placeholder="count"/>
                          <input type="file" id="file" onChange={(e) => {imgData(e)}}/>
                          <button type="submit" className={classes.buttonSub}>
                            Submit
                          </button>
                      </Form>
                    }
              </Formik>
            </div>
        </div>
    )
}

export default Add;
import React from 'react';
import { useHistory } from 'react-router';
import classes from './Signup.module.css';
import { Formik, Form, Field } from 'formik'
import { URL } from '../../URL';
import  backImg from '../../img/back.jpg';


const Signup: React.FC = () => {

    const history = useHistory();

    return(
        <div className={classes.continer} style={{background: `url(${backImg})`}}>
            <button className={classes.buttonHome} onClick={ () => {history.push('/')} }>HOME</button>
            <Formik
                  initialValues={{ lastName: '', firstName: '', email: '',  password: ''}}
                    onSubmit={(values) => {
                      fetch(`${URL}/users/registr`,{
                        method: "POST",
                        headers: {'Content-Type': 'application/json'} as any,
                          body: JSON.stringify(values)
                      })
                          .then(res => res.json())
                          .then(res => console.log(res))
                          .catch(err => console.log(err.message));
                      }}
                  >
                    {
                      <Form className={classes.form}>
                          <p>SIGN UP</p>
                          <Field type="text" name="lastName" placeholder="last name"/>
                          <Field type="text" name="firstName" placeholder="first name"/>
                          <Field type="text" name="email" placeholder="email"/>
                          <Field type="text" name="password" placeholder="password"/>
                          <button type="submit" className={classes.buttonSub}>
                            Submit
                          </button>
                      </Form>
                    }
              </Formik>
        </div>
    )
}

export default Signup
// build out the form to submit new smurfs to the village using semantic-ui
// name: '', age: [], height: '', id: []
// using Formik, Yup
// axios.post('http://localhost:3333/smurfs')

import React, {useState, useEffect} from 'react';
import {Form, Field, withFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const SmurfFrom = ({errors, touched, status}) => {
  const [forms, setForms] = useState([]);
  //console.log(forms);

  useEffect(() => {
    if (status) {
      setForms([...forms, status]);
    }
  }, [status]);

  return (
    <div className='Smurf-Form'> 
      <h1>Add A Smurf!</h1>
        <Form> 
          <Field type='text' name='name' placeholder='name' />
            {touched.name && errors.name && (
              <p className='error'>{errors.name}</p>
            )}
          <Field type='text' name='height' placeholder='height' />
            {touched.height && errors.height && (
              <p className='error'>{errors.height}</p>
            )}
          <Field type='text' name='age' placeholder='age' />
            {touched.age && errors.age && (
              <p className='error'>{errors.age}</p>
            )}
          <button type='submit'>Submit</button>
          {forms.map(form => (
            <p key={form.id}>
              Smurf: {form.name}
            <br/>
              Height: {form.height}
            <br/>
              Age: {form.age}
            </p>
          ))}
        </Form>
    </div>
  )
};

const FormikSmurfForm = withFormik({
  mapPropsToValues({name, height, age}){
    return {
      smurf: name || '',
      height: height || '',
      age: age || ''
    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    height: Yup.string().required(),
    age: Yup.string().required()
  }),

  handleSubmit(values, { setStatus }) {
    axios
      .post('http://localhost:3333/smurfs', values)
      .then(res => {
        setStatus(res.data);
      })
      .catch(err => console.log(err.response));
  }
})(SmurfFrom);

export default FormikSmurfForm
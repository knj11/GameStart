import React, { useContext } from 'react'
import { Button, DialogActions, Typography } from '@material-ui/core'
import { Formik, Form } from 'formik';
import * as yup from 'yup'

import { UserContext } from "./App";
import { MyTextField, MyTextArea } from './'
import { addProduct } from '../api';

const validationSchema = yup.object({
  title: yup.string().required(),
  unitPrice: yup.number().required().test(
    "maxDigitsAfterDecimal",
    "number field must have 2 digits after decimal or less",
    (number) => /^[0-9]*\.[0-9]{2}$/.test(number)
  ),
  description: yup.string().required()
})

const AddProductForm = ({ toggleForm, setProducts }) => {
  const { user } = useContext(UserContext);

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    setSubmitting(true);
    // make async call
    const { token } = user
    try {
      //example login john.doe@aol.com / password123
      const newProduct = await addProduct(token, values)
      console.log('newProduct :>> ', newProduct);
      setProducts(el => [...el, {...newProduct}])
      toggleForm()
    } catch (error) {
      console.log(error)
      setFieldError("general", error.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Formik
      validateOnChange={true}
      initialValues={{
        title: '',
        description: '',
        unitPrice: 0.00
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, isSubmitting }) => (
        <Form>
          <MyTextField placeholder="Game Title" name="title" type="text" />
          <MyTextField placeholder="Game Price" name="unitPrice" type="number" />
          <div style={{ display: "flex" }}>
            <MyTextArea rowsMax={6} name="description" />
          </div>
          {<Typography style={{ color: "red" }}>{errors.general}</Typography>}
          <DialogActions>
            <Button onClick={toggleForm} color="primary">
              Cancel
            </Button>
            <Button disabled={isSubmitting} type='submit' color="primary">
              Submit
            </Button>
          </DialogActions>
        </Form>
      )}
    </Formik>
  )
}

export default AddProductForm
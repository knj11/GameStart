import React, { useContext } from "react";
import { CardContent, CardHeader, Typography, CardMedia, InputLabel, CardActions, Button } from "@material-ui/core"
import { Formik, Form } from 'formik';
import * as yup from 'yup'

import { MyTextField, MyTextArea } from '.'
import { editProduct } from "../api";
import { UserContext } from './App'

const validationSchema = yup.object({
  title: yup.string().required(),
  unitPrice: yup.number().required().test(
    "maxDigitsAfterDecimal",
    "number field must have 2 digits after decimal or less",
    (number) => /^[0-9]*\.[0-9]{2}$/.test(number)
  ),
  description: yup.string().required()
})

const Title = () => {
  return (
    <>
      <InputLabel htmlFor="title">Title</InputLabel>
      <MyTextField id="title" name="title" type="text" />
    </>
  )
}

const Price = () => {
  return (
    <>
      <InputLabel htmlFor="price">Unit Price</InputLabel>
      <MyTextField id="price" name="unitPrice" type="number" />
    </>
  )
}

const EditCard = ({ product, toggleEditMode, setProducts }) => {
  const { user } = useContext(UserContext);

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    setSubmitting(true);
    // make async call
    const { title, unitPrice, description } = values
    const { token } = user
    const { id } = product

    try {
      const res = await editProduct(id, token, { title, unitPrice, description })
      console.log('res :>> ', res);
      if (res) {
        setProducts(products => {
          return [...products].map(el => (el.id === res.id) ? res : el)
        })
      }
      toggleEditMode()
    } catch (error) {
      console.log("Trouble Editing Product");
      console.dir(error);
    }

  }

  return (

    <Formik
      validateOnChange={true}
      initialValues={{
        title: product.title,
        unitPrice: product.unitPrice,
        description: product.description
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, isSubmitting }) => (
        <Form>
          <CardHeader title={<Title />} subheader={<Price />} />
          {/* <CardMedia style={{ height: '100%', width: '100%' }} image={product.picture} title='Video Game' /> */}
          <CardContent style={{ overflow: 'auto', height: '150px' }}>
            <Typography>Description:</Typography>
            <div style={{ display: "flex" }}>
              <MyTextArea rowsMax={6} name="description" />
            </div>
          </CardContent>
          <Typography style={{ color: "red" }}>{errors.general}</Typography>
          <CardActions style={{ "justifyContent": 'flex-end' }}>
            <Button variant="contained" style={{ backgroundColor: "red", color: "white" }} onClick={toggleEditMode}>Cancel</Button>
            <Button disabled={isSubmitting} variant="contained" type="submit" color="primary">Submit</Button>
          </CardActions>
        </Form>
      )}
    </Formik>
  )
}

export default EditCard
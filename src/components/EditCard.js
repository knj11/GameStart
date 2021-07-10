import React from "react";
import { CardContent, CardHeader, Typography, CardMedia, InputLabel } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { Formik, Form } from 'formik';
import * as yup from 'yup'

import { MyTextField, MyTextArea } from '.'

const validationSchema = yup.object({
  title: yup.string().required(),
  unitPrice: yup.number().required().test(
    "maxDigitsAfterDecimal",
    "number field must have 2 digits after decimal or less",
    (number) => Number.isInteger(number * (10 ** 2))
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

const EditCard = ({ product }) => {

  return (

    <Formik
      validateOnChange={true}
      initialValues={{
        title: product.title,
        unitPrice: product.unitPrice,
        description: product.description
      }}
      validationSchema={validationSchema}
    // onSubmit={handleSubmit}
    >
      {({ error, isSubmitting }) => (
        <Form>
          <CardHeader title={<Title />} subheader={<Price />} />
          {/* <CardMedia style={{ height: '100%', width: '100%' }} image={product.picture} title='Video Game' /> */}
          <CardContent style={{ overflow: 'auto', height: '150px' }}>
            <Typography>Description:</Typography>
            <div style={{display: "flex"}}>
              <MyTextArea rowsMax={6} name="description" />
            </div>
          </CardContent>
        </Form>
      )}
    </Formik>
  )
}

export default EditCard
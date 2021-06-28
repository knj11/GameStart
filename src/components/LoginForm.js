import React, { useState } from 'react'
import { Dialog, TextField, DialogTitle, IconButton, DialogContentText, DialogContent, Button, DialogActions, Link, Typography } from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as yup from 'yup'

import { MyTextField } from './'
import { loginUser } from '../auth'

const validationSchema = yup.object({
  email: yup.string().required().min(6),
  password: yup.string().required().min(6)
})

const LoginForm = ({ handleClose, setUser }) => {

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    setSubmitting(true);
    // make async call
    const { email, password } = values
    try {
      //example login john.doe@aol.com / password123
      const userLogin = await loginUser({ email, password })
      console.log("Login Response", userLogin)
      setUser(userLogin)
      handleClose()
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
        email: '',
        password: ''
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, errors, isSubmitting }) => (
        <Form>
          <MyTextField placeholder="Email" name="email" type="text" />
          <MyTextField placeholder="Password" name="password" type="password" />
          {<Typography style={{ color: "red" }}>{errors.general}</Typography>}
          <DialogActions>
            <Button onClick={handleClose} color="primary">
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

export default LoginForm
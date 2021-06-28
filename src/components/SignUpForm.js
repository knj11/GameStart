import React from 'react'
import { Dialog, TextField, DialogTitle, IconButton, DialogContentText, DialogContent, Button, DialogActions, Link, Typography } from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as yup from 'yup'

import { MyTextField } from './';
import { createNewUser } from '../auth'

const validationSchema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required().min(6),
  verifyPassword: yup.string().required().min(6)
})

const SignUpForm = ({ handleClose, setUser }) => {

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    setSubmitting(true);
    // make async call
    const { email, password, firstName, lastName, verifyPassword } = values
    try {
      //example login john.doe@aol.com / password123
      if (!(password === verifyPassword)) throw { name: "MissMatch", message: "Passwords did not match" }
      const userSignUp = await createNewUser({ email, password, firstName, lastName })
      console.log("Login Response", userSignUp)
      setUser(userSignUp)
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
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        verifyPassword: ''
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, isSubmitting }) => (
        <Form>
          <MyTextField placeholder="Enter First Name" name="firstName" type="text" />
          <MyTextField placeholder="Enter Last Name" name="lastName" type="text" />
          <MyTextField placeholder="Enter Email" name="email" type="text" />
          <MyTextField placeholder="Create Password" name="password" type="password" />
          <MyTextField placeholder="Re-Enter Password" name="verifyPassword" type="password" />
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

export default SignUpForm
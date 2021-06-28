import React from 'react'
import { TextField } from '@material-ui/core'
import { useField } from 'formik';

const MyTextField = ({ placeholder, type, ...props }) => {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ""
  return (
    <TextField
      type={type}
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
      fullWidth
      margin="dense"
    />
  )
}

export default MyTextField
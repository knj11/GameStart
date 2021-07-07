import React from 'react'
import { TextareaAutosize } from '@material-ui/core';
import { useField } from 'formik';

const MyTextArea = ({ ...props }) => {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ""
  return (
    <TextareaAutosize
      {...field}
      style={{flexGrow: 1, font: "inherit", padding: "4px", border: "2px solid black"}}
    />
  )
}

export default MyTextArea
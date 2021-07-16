import React, { useState } from 'react'
import { Fab, Dialog, DialogTitle, DialogContent, DialogContentText } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { AddProductForm } from '.';

const addButtonStyle = {
  position: "fixed",
  bottom: '30px',
  right: '20px',
}

const AddProduct = ({setProducts}) => {
  const [open, setOpen] = useState(false)
  const toggleForm = () => setOpen(prev => !prev)

  return (
    <>
      <Fab onClick={toggleForm} style={addButtonStyle} color="primary" >
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={toggleForm}>
        <DialogTitle id='auth-form-dialog-title'>
          Add New Product
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill in the Title, Price, and a short description
          </DialogContentText>
          <AddProductForm setProducts={setProducts} toggleForm={toggleForm} />
        </DialogContent>
      </Dialog>
    </>
  )
}

export default AddProduct
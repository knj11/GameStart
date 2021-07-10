import React, { useContext, useState } from 'react';
import { CardActions, IconButton, Button } from '@material-ui/core';
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import CardDescription from "./CardDescription";
import EditCard from "./EditCard";

import { UserContext } from "./App";
import { deleteProduct } from '../api';


const AdminCardView = ({ product, setProducts }) => {
  const { user } = useContext(UserContext);
  const [editMode, setEditMode] = useState(false);

  const handleDelete = async () => {
    const token = user.token;
    const productId = product.id;
    try {
      const res = await deleteProduct(productId, token);
      if (res) {
        setProducts((products) => {
          return [...products].filter((el) => el.id !== productId);
        });
      }
    } catch (error) {
      console.log("Trouble Deleting Product");
      console.dir(error);
    }
  };

  const toggleEditMode = () => setEditMode((editMode) => !editMode)


  return (
    <>
      {(!editMode) ?
        <>
          <CardDescription product={product} />
          <CardActions style={{ "justifyContent": 'flex-end' }}>
            <IconButton style={{ color: 'red' }} onClick={handleDelete}>
              <DeleteForeverIcon />
            </IconButton>
            <IconButton color='primary' onClick={toggleEditMode}>
              <EditIcon />
            </IconButton>
          </CardActions>
        </>
        :
        <>
          <EditCard product={product} />
          <CardActions style={{ "justifyContent": 'flex-end' }}>
            <Button variant="contained" style={{ backgroundColor: "red", color: "white" }} onClick={toggleEditMode}>Cancel</Button>
            <Button variant="contained" color="primary">Submit</Button>
          </CardActions>
        </>
      }
    </>
  )
}

export default AdminCardView
import React, { useContext } from 'react';
import { CardActions, IconButton } from '@material-ui/core';
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";

import { UserContext } from "./App";


const AdminCardActions = ({ product, setProducts }) => {
  const { user } = useContext(UserContext);

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

  return (
    <CardActions style={{ "justifyContent": 'flex-end' }}>
      <IconButton style={{ color: 'red' }} onClick={handleDelete}>
        <DeleteForeverIcon />
      </IconButton>
      <IconButton color='primary' onClick={() => setEditMode(!editMode)}>
        <EditIcon />
      </IconButton>
    </CardActions>
  )
}

export default AdminCardActions
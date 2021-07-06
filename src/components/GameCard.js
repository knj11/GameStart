import React, { useState } from "react";
import { Card, CardContent, CardHeader, Grid, Typography, CardActions, IconButton, CardMedia } from "@material-ui/core"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from "@material-ui/core/styles"

import { CardDescription, EditCard } from './'
import { deleteProduct } from "../api";

const useStyles = makeStyles({
  gridContainer: {
    padding: "18px"
  },
  // cardHeight: {
  //   height: "500px"
  // },
  scroll: {
    //make sure to consider parent "contanter" when setting height. If larger the box wont scroll
    overflow: "auto",
    height: "150px"
  }
})

const GameCard = ({ product, isAdmin }) => {
  const classes = useStyles()

  const [editMode, setEditMode] = useState(false)

  const handleDelete = async () => {
    const productId = product.id
    try {
      const res = await deleteProduct(productId)
    } catch (error) {
      console.log("Trouble Deleting Product")
      console.dir(error)
    }
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card key={product.id} elevation={2} className={classes.cardHeight}>
        {(!editMode) ? <CardDescription product={product} /> : <EditCard product={product} />}
        {(isAdmin) &&
          <CardActions style={{ "justifyContent": 'flex-end' }}>
            <IconButton style={{ color: 'red' }} onClick={handleDelete}>
              <DeleteForeverIcon />
            </IconButton>
            <IconButton color='primary' onClick={() => setEditMode(!editMode)}>
              <EditIcon />
            </IconButton>
          </CardActions>
        }
      </Card>
    </Grid>
  )
}

export default GameCard
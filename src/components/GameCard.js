import React from "react";
import { Card, CardContent, CardHeader, Grid, Typography, CardActions, IconButton } from "@material-ui/core"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  gridContainer: {
    padding: "18px"
  },
  cardHeight: {
    height: "300px"
  },
  scroll: {
    //make sure to consider parent "contanter" when setting height. If larger the box wont scroll
    overflow: "auto",
    height: "150px"
  }
})

const GameCard = ({ product, isAdmin }) => {
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card key={product.id} elevation={2} className={classes.cardHeight}>
        <CardHeader title={product.title} subheader={product.unitPrice} />
        <CardContent className={classes.scroll}>
          <Typography >
            Description:
          </Typography>
          <Typography>
            {product.description}
          </Typography>
        </CardContent>
        {(isAdmin) &&
          <CardActions>
            <IconButton>
              <DeleteForeverIcon />
            </IconButton>
            <IconButton>
              <EditIcon />
            </IconButton>
          </CardActions>
        }
      </Card>
    </Grid>
  )
}

export default GameCard
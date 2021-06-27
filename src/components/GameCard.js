import React from "react";
import { Card, CardContent, CardHeader, Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  gridContainer: {
    padding: "18px"
  },
  cardHeight: {
    height: "200px"
  },
  scroll: {
    //make sure to consider parent "contanter" when setting height. If larger the box wont scroll
    overflow: "auto",
    height: "100px"
  }
})

const GameCard = ({ product }) => {
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card key={product.id} elevation={2} className={classes.cardHeight}>
        <CardHeader title={product.title} subheader={product.unitPrice}>
        </CardHeader>

        <CardContent className={classes.scroll}>
          <Typography >
            Description:
          </Typography>
          <Typography>
            {product.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default GameCard
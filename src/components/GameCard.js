import React from "react";
import { Container, Card, Typography, CardContent, CardHeader, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  gridContainer: {
    padding: "18px"
  },
  cardHeight: {
    height: "200px"
  },
  scroll: {
    overflow: "auto",
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
          {product.description}
        </CardContent>
      </Card>
    </Grid>
  )
}

export default GameCard
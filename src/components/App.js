import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import { GameCard, NavBar, AuthDialog } from "./index"

import { fetchAllProducts } from '../api'

const useStyles = makeStyles({
  gridContainer: {
    padding: "18px"
  },
})

const App = () => {
  const classes = useStyles()
  const [products, setProducts] = useState(false)

  useEffect(() => {
    fetchAllProducts()
      .then((response) => setProducts(response))
      .catch((error) => console.log("Request Not Made"))
  }, [])

  const renderProductCards = (products) => (products) && products.map((product) => <GameCard product={product} />)

  return (
    <>
      <NavBar />
      <Grid container spacing={3} className={classes.gridContainer}>
        {renderProductCards(products)}
      </Grid>
    </>
  )

}

export default App
import React, { useState, useEffect } from "react";
import { Grid, Fab } from "@material-ui/core"
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from "@material-ui/core/styles"

import { GameCard, NavBar } from "./index"

import { fetchAllProducts } from '../api'
import { useLocalStorage } from "./hooks";

const useStyles = makeStyles({
  gridContainer: {
    padding: "18px"
  },
  addButton: {
    position: "fixed",
    bottom: '30px',
    right: '20px',
  }
})

const App = () => {
  const classes = useStyles()
  const [products, setProducts] = useState(false)
  const [user, setUser] = useLocalStorage("user", { id: '', roleId: '' })

  const isAdmin = (user.roleId === 1)

  useEffect(() => {
    fetchAllProducts()
      .then((response) => setProducts(response))
      .catch((error) => console.log("Request Not Made"))
  }, [])

  const renderProductCards = (products) => (products) && products.map((product) => <GameCard setProducts={setProducts} user={user} product={product} isAdmin={isAdmin} />)

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <Grid container spacing={3} className={classes.gridContainer}>
        {renderProductCards(products)}
      </Grid>
      {(isAdmin) && 
        <Fab className={classes.addButton} color="primary" >
          <AddIcon />
        </Fab>
      }
    </>
  )
}

export default App
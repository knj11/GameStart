import React, { useState, useEffect } from "react";
import { Container, Card, Typography } from "@material-ui/core"

import { fetchAllProducts } from '../api'

const App = () => {
  const [products, setProducts] = useState(false)

  useEffect(() => {
    fetchAllProducts()
      .then((response) => setProducts(response))
      .catch((error) => console.log("Request Not Made"))
  }, [])

  return (
    <Container>
      {(products) && products.map((product, idx) => {
        return (
          <Card key={idx} elevation={2}>
            <CardContent>
              <Typography>
                {/* Will add properties once we decide on columns*/}
              </Typography>
            </CardContent>
          </Card>
        )
      })}
    </Container>
  )

}

export default App
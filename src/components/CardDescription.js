import React from "react";
import { CardContent, CardHeader, Typography, CardMedia } from "@material-ui/core"

const CardDescription = ({ product }) => {

  return (
    <>
      <CardHeader title={product.title} subheader={`$${product.unitPrice}`} />
      {/* <CardMedia style={{ height: '100%', width: '100%' }} image={product.picture} title='Video Game' /> */}
      <CardContent style={{overflow: 'auto', height: '150px'}}>
        <Typography >
          Description:
        </Typography>
        <Typography>
          {product.description}
        </Typography>
      </CardContent>
    </>
  )
}

export default CardDescription
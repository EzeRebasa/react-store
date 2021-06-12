import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import './Item.css';
import ItemCount from '../ItemCount/ItemCount';

const Item = ({product}) => {

    const {image, price, description, stock, name, id} = product;

    return (
        <Card className='card-container'>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Product image"
              height="140"
              image={image}
              title={name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {description}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {price}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <ItemCount stock={stock}/>
          </CardActions>
        </Card>
      );
}

export default Item;

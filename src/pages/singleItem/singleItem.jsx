import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import useStyles from './singleItem.style';

function SingleItem() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid item xs={12} sm={8}>
        <div className={classes.itemSection}>
          <h1 className={classes.title}>Item name</h1>
          <p>Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </p>
          <p><strong>Price:</strong> XAF 2000</p>
        </div>

        <h3><Link className={classes.home} to="/">Home</Link></h3>
      </Grid>
      <Grid item xs={12} sm={4}>
        <h4>Checkout</h4>
      </Grid>
    </Grid>
  );
}

export default SingleItem;

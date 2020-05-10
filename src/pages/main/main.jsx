import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import data from './../../data/data';
import useStyles from './main.style';

function Main() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={3}>
      {/* Navbar */}
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Pretty Hair
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>

      {/* body */}
      {
        data.map(product => {
          return (
            <Grid item xs={6} sm={3} key={product.id}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="200"
                    image={product.img}
                    title="Braids"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
              </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
              </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.bookSection}>
                  <p>{product.price}</p>
                  <Button size="small">
                    <Link className={classes.bookBtn} to="/book">Book</Link>
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })
      }
    </Grid>
  );
}

export default Main;

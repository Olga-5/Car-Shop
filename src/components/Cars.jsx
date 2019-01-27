import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { getCars } from '../selectors';

const mapStateToProps = state => ({
  cars: getCars(state),
});

const Cars = ({ cars, handleOpen }) => (
  <Grid container>
    {cars.map(car => (
      <Grid xs={4} key={_.uniqueId()}>
        <Card style={{ marginBottom: '40px', marginRight: '20px' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="car"
              height="140"
              image={car.img}
              title="Car"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {car.title}
              </Typography>
              <Typography component="p">
                {car.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" variant="contained" onClick={handleOpen(car)}>
              Edit
            </Button>
            <div>
              <Paper elevation={2}>
                <Typography variant="h5" component="h3">
                  {`${car.price}$`}
                </Typography>
              </Paper>
            </div>
          </CardActions>
        </Card>
      </Grid>
    ))}
  </Grid>
);

export default connect(mapStateToProps)(Cars);

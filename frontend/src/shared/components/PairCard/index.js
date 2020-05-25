import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 380,
    margin: '0 auto',
    marginBottom: '10px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
 
});

export default function SimpleCard(props) {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
    // console.log('props in WineCard: ', props.pair)
  return (
    <Card className={classes.root}>
      <CardContent>
          {/* wine content */}
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Wine
        </Typography>
        <Typography variant="h5" component="h2">
          {props.pair.wine}
        </Typography>
        {/* <Typography className={classes.pos} color="textSecondary">
          {props.wine[0].winery + ' | ' + props.wine[0].province + ', ' + props.wine[0].country}
        </Typography>
        <Typography variant="body2" component="p">
         {props.wine[0].description}
        </Typography>
      */}

    {/* cheese content */}
      <Typography className={classes.title} color="textSecondary" gutterBottom>
          Cheese
        </Typography>
        <Typography variant="h5" component="h2">
          {props.pair.cheese}
        </Typography>
        {/* <Typography className={classes.pos} color="textSecondary">
          {props.wine[0].winery + ' | ' + props.wine[0].province + ', ' + props.wine[0].country}
        </Typography>
        <Typography variant="body2" component="p">
         {props.wine[0].description}
        </Typography> */}
      
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
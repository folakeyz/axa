import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    maxWidth: "30%",
    float:"left",
    margin:"1%",
  },
  media: {
    height: 100,
  },
 
});

const theme = createMuiTheme({
  typography: {
    subtitle1: {
      fontSize: 9,
    },
    body1: {
      fontSize: 7,
    },
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
      
   
     <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Axa Mansard News"
        />
        <CardContent>
        <ThemeProvider theme={theme}>
          <Typography variant="subtitle1">
          {props.title}
          </Typography>
          
          <Typography variant="body1" color="textSecondary" component="p">
          {props.intro}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="small">
          {props.date}
          </Typography>
          </ThemeProvider>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    
  </Card>
 

    
    
    
  );
}

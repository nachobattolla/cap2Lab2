import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const UserCard = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }} style={{background:"lightgray", border:"1px solid black"} }>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image= {props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.firstName + " " + props.lastName}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {props.email}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default UserCard;

import React from 'react';
import { Card,CardActions, Grid, Button, Typography, CardContent, Box } from '@mui/material/';


const Home = ({notes, updatingNote, deleteNote}) => {
  // console.log(notes)
  return <div>
    {notes.length === 0 ? <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="50vh"
    >
      <Typography>

        <h1>Oops! There is no note you have made </h1>
      </Typography>
    </Box> :
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {notes.map((elem, index)=>
      <Grid item xs={2} sm={4} md={4} key={index} >
      <Card sx={{ maxWidth: 345, m: 4 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {elem.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {elem.note}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color='error' onClick={()=>deleteNote(elem.id)}>Delete</Button>
          <Button size="small" onClick={()=>updatingNote(elem.id)} >Update</Button>
        </CardActions>
      </Card>
    </Grid>)}
    </Grid>
  }
  </div>
};

export default Home;

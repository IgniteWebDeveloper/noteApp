import React from 'react';
import { Card, CardActions, Grid, Button, Typography, CardContent, Box, Typgraphy } from '@mui/material/';


const Home = ({ trashNote, permanentDelete, restoreNote }) => {
  const noItem = trashNote.length === 0 ? 'Nhi' : 'hega'
  return <div>
{trashNote.length === 0 ? <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="50vh"
    >
      <Typography>

        <h1>There is no item in your Trash</h1>
      </Typography>
    </Box> : <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {trashNote.map((elem, index)=>
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
          <Button size="small" color='error' onClick={()=>permanentDelete(elem.id)}>Permanent Delete</Button>
          <Button size="small" onClick={()=>restoreNote(elem.id)}>Restore</Button>
        </CardActions>
      </Card>
    </Grid>)}
    </Grid> }
  </div>
};

export default Home;

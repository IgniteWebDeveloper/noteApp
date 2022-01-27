import React from 'react';
import {TextField, Button, Grid} from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import SaveIcon from '@mui/icons-material/Save';
import { NavLink } from 'react-router-dom';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const Create = ({newNote}) => {


  let marginTop={
    marginTop: '5rem'
}
let marginSingleTop={
    marginTop: '2rem'
}
  return <div>
          <Grid container>
            <div id='Main'>
          <Grid sm={16} item>
          <TextField name='title' fullWidth style={marginSingleTop} label="Title" placeholder="Enter title" />
          <TextField name='note' fullWidth style={marginSingleTop}  label="Note" multiline rows={2} min={20} placeholder="Enter note here. . ." />
          </Grid>
          <div style={{marginTop: '4rem', display:'flex', alignItems:'center', justifyContent:'center' }} >
          <Button style={{display:'flex', alignItems:'center', marginRight:'25px' }} variant="contained"><NavLink exact to="/"> <HomeIcon fontSize='small' style={{marginRight: '6px', marginBottom:'2px'}}/>Go to home</NavLink></Button>
          <Button variant="contained" onClick={newNote} startIcon={<SaveIcon />}>Save</Button>
          </div>
        </div>
        </Grid>
  </div>;
  
};

export default Create;

import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';
import SaveIcon from '@mui/icons-material/Save';
import { NavLink , useNavigate} from 'react-router-dom';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const Update = ({ notes }) => {

  const [noteState, setnote] = useState({
    title: '',
    noteContent: ''
  })
  
  const navigate = useNavigate();

  let marginTop = {
    marginTop: '5rem'
  }
  let marginSingleTop = {
    marginTop: '2rem'
  }
  return <div>
    <Grid container>
      <form>
        <div id='Main'>
          <Grid sm={16} item>
            <TextField name='title' fullWidth style={marginSingleTop} label="Title" placeholder="Enter title" />
            <TextField name='note' fullWidth style={marginSingleTop} label="Note" multiline rows={2} min={20} placeholder="Enter note here. . ." />
          </Grid>
          <div style={{ marginTop: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
            <Button style={{ display: 'flex',alignItems: 'center', marginRight: '25px' }} variant="contained"><NavLink exact to="/" style={{color:'white', textDecoration: 'none'}} >Cancel</NavLink></Button>
            <Button variant="contained" type='submit' startIcon={<SaveIcon />}>Save</Button>
          </div>
        </div>
      </form>
    </Grid>
  </div>

};

export default Update;

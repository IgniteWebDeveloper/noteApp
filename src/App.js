import React, { useState } from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './Components/Home.js';
import Create from './Components/Create.js';
import Update from './Components/Update.js';
import Trash from './Components/Trash.js';
import Nav from './Components/Nav';
import uuid from 'uuid-v4';







const App = () => {
  const [note, noteList] = useState([
    {
      id: uuid(),
      title: 'Adnan',
      note: 'Full Stack Developer'
    }
  ])
  
  let onNewNoteHandler = () => {
    console.log('hey')
  }

  return <div>
    <Nav />
    <Routes>
      <Route exact path={`/`} element={<Home notes = {note} />} />
      <Route exact path={`/create`} element={<Create newNote={onNewNoteHandler} />} />
      <Route exact path={`/update`} element={<Update />} />
      <Route exact path={`/trash`} element={<Trash />} />
    </Routes>
  </div>
};

export default App;

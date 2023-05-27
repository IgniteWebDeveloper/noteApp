// import React, { useState } from 'react';
// import { Route, Routes, useNavigate } from 'react-router-dom';
// import Home from './Components/Home.js';
// import Create from './Components/Create.js';
// import Update from './Components/Update.js';
// import Trash from './Components/Trash.js';
// import Nav from './Components/Nav';
// import uuid from 'uuid-v4';
// import { FourGMobiledata } from '@mui/icons-material';


// const App = () => {
  const [note, noteList] = useState([
    {
      id: uuid(),
      title: 'Jhon Doe',
      note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, iste?'
    }
  ])

//   const [updateNote, updateList] = useState(null);

//   const [trashNote, trashList] = useState([]);
//   const navigate = useNavigate();


  const onNewNoteHandler = (event) => {
    event.preventDefault()
    const copyNote = [...note]
    const newNote = { id: uuid(), title: event.target.title.value, note: event.target.note.value }
    copyNote.push(newNote)
    noteList(copyNote)
    navigate('/')
  };

//   const onupdateNote = (id) => {
//     navigate('/update')
//     // const copyNote = [...updateNote]
//     // const noteIndex = note.findIndex(note => note.id === id)
//     // updateNote.splice(noteIndex, 1)
//     // updateList(updateNote)
    
//     const foundNote = note.find(note => note.id === id)
//     updateList(foundNote)
//     // updateNote.push(foundNote)
//     // updateList(updateNote)
//   };

  const onDeleteNote = (id) =>{
    const noteIndex = note.findIndex(note => note.id === id)
    const copyNote = [...note]
    copyNote.splice(noteIndex, 1)
    noteList(copyNote)

    const trashedNote = note[noteIndex]
    trashNote.push(trashedNote)
    console.log(trashNote);
  };
//   const onPermanentDelete = (id)=> {
//     const noteIndex = trashNote.findIndex(trashNote => trashNote.id === id)
//     const copyNote = [...trashNote]
//     copyNote.splice(noteIndex, 1)
//     trashList(copyNote)
//     console.log(copyNote);
//   };

//   const onRestoreNote = (id) => {
//     const foundNote = trashNote.find(trashNote => trashNote.id === id)
//     const copyNote = [...trashNote]
//     copyNote.push(foundNote)
//     noteList(copyNote)


//     console.log(foundNote)
//   };
//   const onUpddateNote = () => {
//     console.log('first');
//   }

//   return <div>
//     <Nav />
//     <Routes>
//       <Route
//         exact
//         path={`/`}
//         element={<Home ome notes={note} updatingNote={onupdateNote} deleteNote={onDeleteNote} />}
//       />
      <Route exact path={`/create`} element={<Create newNote={onNewNoteHandler} />} />
//       <Route exact path={`/update`} element={<Update updateNote={updateNote} onupdatingNote={onUpddateNote}/>} />
//       <Route exact path={`/trash`} element={<Trash trashNote= {trashNote} permanentDelete={onPermanentDelete} restoreNote={onRestoreNote}/>} />
//     </Routes>
//   </div>
// };

// export default App;
import React, { useState } from 'react';
import MUIDataTable from "mui-datatables";

const App = () => {
  const columns = ["Name", "Company", "City", "State"];
  const [responsive, setResponsive] = useState('vertical');

const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];

const options = {
  filterType: 'checkbox',
  responsive
};
  return (
    <MUIDataTable
  title={"Employee List"}
  data={data}
  columns={columns}
  options={options}
/>
  )
}

export default App
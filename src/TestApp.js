import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import AddModal from './Components/AddModal';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
function App() {
  const [modal,setModal] = useState(false)
  const toggleModal=()=>{
    setModal(!modal)
    console.log(modal)
  }
  const columns: GridColDef[] = [
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'email',
      headerName: 'Email',
      type: 'number',
      width: 190,
    },
    {
      field: 'Edit/Del',
      headerName: 'Edit/Del',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 100,
      valueGetter: <EditIcon/>

    },
  ];
  
  const [rows,setRows] = useState([
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ]);
  
  return (
    <div>
      <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            To-Do-List
          </Typography>
          <Button color="inherit"></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
    <div className='add-btn' onClick={toggleModal}>
      <AddIcon />
    </div>
      <div>
        {modal && <AddModal setModal={setModal} modal={modal}/>}
      </div>
    <div style={{ height: 400, width: '60%',marginLeft:'auto',marginRight:'auto' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={4}
        rowsPerPageOptions={[5]}
      />
      </div>
    </div>
  );
}

export default App;

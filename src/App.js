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


import EditRow from './Components/EditRow';
import NonEditRow from './Components/NonEditRow';
//import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
function App() {
  const [modal,setModal] = useState(false)
  const [rows,setRows] = useState([{id:1,firstName:"Gokul",secondName:'Saradhi',Email:'saradhi443@gmail.com'},
  {id:2,firstName:"Gowtham",secondName:'Geddam',Email:'Gowthamg@gmail.com'}])
  const [firstName,setFirstName]=useState('')
    const [secondName,setSecondName]=useState('')
    const [Email,setEmail]=useState('')
    const [editId,setEditId] = useState()

  
  const toggleModal=()=>{
    setModal(!modal)
    // setRows([...rows,{id:rows.length,firstName:firstName,secondName:secondName,Email:Email}])
    // console.log(rows,"HI")
  }

  const deleteUser=(idToRemove)=>{
    console.log(idToRemove)
    const filteredPeople = rows.filter((item) => item.id !== idToRemove);
    setRows(filteredPeople)
  }
  React.useEffect(()=>{
console.log(rows,"rowss")
console.log(rows.JSON)


  },[rows])
  
  return (
    <div>

    <div className='add-btn' onClick={toggleModal}>
      <AddIcon />
    </div>
      <div className='display-style'>
        <form>
        <table> 
          <thead>
          <tr>
            <th style={{width:90,}}>ID</th>
            <th>FirstName</th>
            <th>SecondName</th>
            <th>Email</th>
            <th>Edit/Del</th>
          </tr>
          </thead>
          <tbody>
          {rows && rows.map((row,i)=>{
            return(
              <React.Fragment>
                {console.log(editId===row.id)}
                  {editId==row.id?<EditRow row={row} rows={rows} setEditId={setEditId}/>:<NonEditRow setEditId={setEditId} row={row} index={i} deleteUser={deleteUser}/>}
              </React.Fragment>
            )
          })}
          {/* <tr>
            <td>{rows.length +1}</td>
            <td><input value={firstName} type='text' placeholder='Enter Your Firstname' onChange={(e)=>setFirstName(e.target.value)}/></td>
            <td><input value={secondName} type='text' placeholder='Enter Your SecondName' onChange={(e)=>setSecondName(e.target.value)}/></td>
            <td><input value={Email} type='email' placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)}/></td>
          </tr> */}
          </tbody>
            
        </table>
        </form>
      </div>
      <div>
        {modal && <AddModal setModal={setModal} rows={rows} setRows={setRows} modal={modal}/>}
      </div>
    </div>
  );
}

export default App;

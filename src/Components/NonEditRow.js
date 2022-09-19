import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Edit from '@mui/icons-material/Edit';
import { selectedIdsLookupSelector } from '@mui/x-data-grid';

const NonEditRow = (props) => {
  const {row,deleteUser,setEditId,index} = props
  return (
      <tr key={row.id}>
                <td>{index+1}</td>
                <td>{row.firstName}</td>
                <td>{row.secondName}</td>
                <td>{row.Email}</td>
                <td><EditIcon onClick={()=>setEditId(row.id)} /><DeleteIcon id={row.id} onClick={()=>deleteUser(row.id)}/></td>
              </tr>
  )
}

export default NonEditRow

import React from 'react'
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import { getRowsStateFromCache } from '@mui/x-data-grid/hooks/features/rows/gridRowsUtils';

const EditRow = (props) => {
    const {row,setEditId,rows} = props
    let firstName=row.firstName
    let secondName=row.secondName
    let email=row.Email
    const saveChanges=()=>{
        rows.map((testRow)=>{
            if(testRow.id===row.id){
                testRow.firstName=firstName
                testRow.secondName=secondName
                testRow.Email=email
            }
        })
        setEditId(null)
    }

  return (
      <tr key={row.id}>
                <td>{row.id}</td>
                <td><input type='text' defaultValue={firstName} onChange={(e)=>firstName=e.target.value} /></td>
                <td><input type='text' defaultValue={secondName} onChange={(e)=>secondName=e.target.value} /></td>
                <td><input type='text' defaultValue={email} onChange={(e)=>email=e.target.value} /></td>
                <td><SaveIcon onClick={saveChanges}/><CancelIcon onClick={()=>setEditId(null)}  id={row.id}/></td>
              </tr>
  )
}

export default EditRow

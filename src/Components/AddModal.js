
import React, { useState } from 'react';
import './AddModal.css'

const AddModal = ({setModal,modal,rows,setRows}) => {
    const [firstName,setFirstName]=useState('')
    const [secondName,setSecondName]=useState('')
    const [Email,setEmail]=useState('')
    const toggleModaltwo=()=>{
        setModal(!modal)
        const data={id:rows.length+1,firstName:firstName,secondName:secondName,Email:Email,edit:false}
        const data1=JSON.stringify(data)
        console.log(data,data1,"heloooooo")
        setRows([...rows,{id:rows.length+1,firstName:firstName,secondName:secondName,Email:Email}])
        console.log(rows)
        
    //console.log(newValue)
    }
  return (
    <div>
      <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <div className="first-modal">
                <form>
                    <label>FirstName: </label>
                    <input type='text' placeholder='Enter Your Firstname' onChange={(e)=>setFirstName(e.target.value)}/>
                    <br/>
                    <label>SecondName: </label>
                    <input type='text' placeholder='Enter Your SecondName' onChange={(e)=>setSecondName(e.target.value)}/>
                    <br/>
                    <label>Email: </label>
                    <input type='email' placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)}/>
                </form>
            </div>
            <div className="buttonCont">
                <button variant="light" className="submit-modal" onClick={toggleModaltwo}>
                    Submit
                </button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AddModal

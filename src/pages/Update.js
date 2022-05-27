import * as React from 'react';
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';

import "../pages/Forms/Forms.css"
import { useState , useEffect} from 'react';
import axios from "axios"

const Update = () => {
  const [open, setOpen] = React.useState(false);
  // const [contacts, setContacts] = React.useState(things);
  const [custID, setCustID] = useState("")
  const [custName, setName] = useState("")
  const [church, setChurch] = useState("")
  const [diocese, setDiocese] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [ID, setID] = useState(null)

//  console.log(custID)
//  console.log(custName)
//  console.log(church)


 const sendDataToApi = ()=>{
axios.put(`https://628b7c86667aea3a3e304426.mockapi.io/Test/${custID}`,{
  custID,
  custName,
  church,
  diocese,
  phoneNumber
})
 }
useEffect(()=>{
  setCustID(localStorage.getItem("custID"))
  setName(localStorage.getItem("custName"))
  setChurch(localStorage.getItem("church"))
  setDiocese(localStorage.getItem("diocese"))
  setPhoneNumber(localStorage.getItem("phoneNumber"))
  setID(localStorage.getItem("ID"))
}, [])
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event) => {
    // event.preventDefault()
    setOpen(false);
  };
  return (
    <div>
      {/* <Button variant="outlined" typography="h5" onClick={handleClickOpen}>
        Edit Table Data
      </Button>
      <Dialog open={open} onClose={handleClose}> */}
       
          <h3>Add A New Customer</h3>
          <form > 
          <div className='space'>
            <div className='in_space'>
          <label>Customer ID</label><br></br>
          <input
          value={custID}
       type="text"
       name="customerID"
       required="required"
       placeholder='Enter Customer ID'
       onChange={(e)=> setCustID(e.target.value)}
       /> <br></br></div>
       <div className='in_space'>
       <label>Customer Name</label><br></br>
       <input
       value={custName}
       type="text"
       name="name"
       required="required"
       placeholder='Enter Customer Name'
       onChange={(e)=> setName(e.target.value)}

       /><br></br></div>
       <div className='in_space'>
       <label>Church</label><br></br>
       <input
       value={church}
       type="text"
       name="church"
       required="required"
       placeholder='Enter Church'
       onChange={(e)=> setChurch(e.target.value)}

       /><br></br></div>
       <div className='in_space'>
       <label>Diocese</label><br></br>
       <input
       value={diocese}
       type="text"
       name="diocese"
       required="required"
       placeholder='Enter Diocese'
       onChange={(e)=> setDiocese(e.target.value)}

       /><br></br>
       </div>
       <div className='in_space'>
       <label>Phone Number</label><br></br>
       <input
       value={phoneNumber}
       type="text"
       name="phoneNumber"
       required="required"
       placeholder='Enter Phone Number'
       onChange={(e)=> setPhoneNumber(e.target.value)}

       />
       </div>
     </div>
      
          </form>
        
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={sendDataToApi}>Update</Button>
      
      {/* </Dialog> */}
    </div>
  );
}


export default Update
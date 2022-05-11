import * as React from 'react';
import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
import "../Forms/Forms.css"
import things from "../../database/database.json"

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [contacts, setContacts] = React.useState(things);
  const [addFormData, setAddFormData] =React.useState({
     customerID: "",
    name: "",
    church: "",
    diocese: "",
    phoneNumber: ""



  })
  const handleAddFormChange =(event) =>{
    event.preventDefault();
    const fieldName = event.target.getAttribute("name")
    const fieldValue  = event.target.value
    const newFormData = {...addFormData}
    newFormData[fieldName] = fieldValue
  setAddFormData(newFormData)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event) => {
    event.preventDefault()
    setOpen(false);
  };

 const handleAddFormSubmit = (event)=>{
   event.preventDefault();
   const newContact = {
     customerID: addFormData.customerID,
     name: addFormData.name,
     church: addFormData.church,
     diocese: addFormData.diocese,
     phoneNumber: addFormData.phoneNumber
   }
   setContacts(newContacts)
   const newContacts = [...contacts, newContact]
 }
  return (
    <div>
      <Button variant="outlined" typography="h5" onClick={handleClickOpen}>
        Edit Table Data
      </Button>
      <Dialog open={open} onClose={handleClose} onSubmit={handleAddFormSubmit}>
       
          <h3>Add A New Customer</h3>
          <form onSubmit={handleAddFormSubmit}> 
          <div className='space'>
            <div className='in_space'>
          <label>Customer ID</label><br></br>
          <input
       type="text"
       name="customerID"
       required="required"
       placeholder='Enter Customer ID'
       onChange={handleAddFormChange}
       /> <br></br></div>
       <div className='in_space'>
       <label>Customer Name</label><br></br>
       <input
       type="text"
       name="name"
       required="required"
       placeholder='Enter Customer Name'
       onChange={handleAddFormChange}
       /><br></br></div>
       <div className='in_space'>
       <label>Church</label><br></br>
       <input
       type="text"
       name="church"
       required="required"
       placeholder='Enter Church'
       onChange={handleAddFormChange}
       /><br></br></div>
       <div className='in_space'>
       <label>Diocese</label><br></br>
       <input
       type="text"
       name="diocese"
       required="required"
       placeholder='Enter Diocese'
       onChange={handleAddFormChange}
       /><br></br>
       </div>
       <div className='in_space'>
       <label>Phone Number</label><br></br>
       <input
       type="text"
       name="phoneNumber"
       required="required"
       placeholder='Enter Phone Number'
       onChange={handleAddFormChange}
       />
       </div>
     </div>
      
          </form>
        
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={handleClickOpen}>Add</Button>
      
      </Dialog>
    </div>
  );
}

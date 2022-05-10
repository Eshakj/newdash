import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import "../Forms/Forms.css"
import things from "../../database/database.json"

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [contacts, setContacts] = React.useState(things);
  const [addFromData, setAddFormData] =React.useState({
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
    const newFormData = {...addFromData}
    newFormData[fieldName] = fieldValue

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
     customerID: addFromData.customerID,
     name: addFromData.name,
     church: addFromData.church,
     diocese: addFromData.diocese,
     phoneNumber: addFromData.phoneNumber
   }
   const newContacts = [...contacts, newContact]
   setContacts(newContacts)
 }
  return (
    <div>
      <Button variant="outlined" typography="h5" onClick={handleClickOpen}>
        Edit Table Data
      </Button>
      <Dialog open={open} onClose={handleClose} onSubmit={handleAddFormSubmit}>
        <DialogTitle variant="h4">Edit Table Data</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Click add to edit table data.
          </DialogContentText>
          <h3>Add A New Customer</h3>
      <div className="no_space">
          <h4>Customer ID</h4>
         
          <TextField
            autoFocus
            margin="light"
            name="customerID"
            label=""
            type="email"
            fullWidth
            variant="standard"
            onChange={handleAddFormChange}
          /></div>
           <div className="no_space">
          <h4>Customer Name</h4>
         
          <TextField
            autoFocus
            margin="light"
            name="name"
            label=""
            type="email"
            fullWidth
            variant="standard"
            onChange={handleAddFormChange}
          /></div>
           <div className="no_space">
          <h4>Church</h4>
         
          <TextField
            autoFocus
            margin="light"
            name="church"
            label=""
            type="email"
            fullWidth
            variant="standard"
            onChange={handleAddFormChange}
          /></div>
           <div className="no_space">
          <h4>Diocese</h4>
         
          <TextField
            autoFocus
            margin="light"
            name="diocese"
            label=""
            type="email"
            fullWidth
            variant="standard"
            onChange={handleAddFormChange}
          /></div>
           <div className="no_space">
          <h4>Phone Number</h4>
         
          <TextField
            autoFocus
            margin="light"
            name="phoneNumber"
            label=""
            type="email"
            fullWidth
            variant="standard"
            onChange={handleAddFormChange}
          /></div>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import "../Forms/Forms.css"

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [CustName, setCustName] = React.useState("")

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 
  return (
    <div>
      <Button variant="outlined" typography="h5" onClick={handleClickOpen}>
        Edit Table Data
      </Button>
      <Dialog open={open} onClose={handleClose}>
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
            id="name"
            label=""
            type="email"
            fullWidth
            variant="standard"
          /></div>
           <div className="no_space">
          <h4>Customer Name</h4>
         
          <TextField
            autoFocus
            margin="light"
            id="name"
            label=""
            type="email"
            fullWidth
            variant="standard"
          /></div>
           <div className="no_space">
          <h4>Church</h4>
         
          <TextField
            autoFocus
            margin="light"
            id="name"
            label=""
            type="email"
            fullWidth
            variant="standard"
          /></div>
           <div className="no_space">
          <h4>Diocese</h4>
         
          <TextField
            autoFocus
            margin="light"
            id="name"
            label=""
            type="email"
            fullWidth
            variant="standard"
          /></div>
           <div className="no_space">
          <h4>Phone Number</h4>
         
          <TextField
            autoFocus
            margin="light"
            id="name"
            label=""
            type="email"
            fullWidth
            variant="standard"
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

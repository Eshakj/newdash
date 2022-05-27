// import * as React from 'react';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@material-ui/core/Paper'
import CustForm from "./Forms/CustForm"
// import data from "../database/database.json"
import axios from "axios"
// import { Button } from 'bootstrap';
import { Link } from 'react-router-dom'

// import {BrowserRouter as Router, Route} from "react-router-dom"





const Customers = () =>{
  // const [customers, setCustomers] = useState("")
  const [apiData, setApiData] = useState([])
  useEffect(() => {
    axios.get("https://628b7c86667aea3a3e304426.mockapi.io/Test")
    .then((getData)=>{
      setApiData(getData.data)
    })
  }, [])
  
  // const data = ()=> getData.data
//   const setID =(id)=>{
// console.log(id)
// localStorage.setItem("ID", id)
//   }
const getData = (id)=>{
  axios.get("https://628b7c86667aea3a3e304426.mockapi.io/Test")
  .then((getData)=>{
    setApiData(getData.data)
  })
}
const setData = (custName,custID,phoneNumber,diocese,church)=>{
 localStorage.setItem("custID", custID)
 localStorage.setItem("custName", custName)
 localStorage.setItem("church", church)
 localStorage.setItem("diocese", diocese)
 localStorage.setItem("phoneNumber", phoneNumber)
//  localStorage.setItem("ID", ID)
}
const onDelete = (custID,e) => {
  e.preventDefault()
axios.delete(`https://628b7c86667aea3a3e304426.mockapi.io/Test/${custID}`).then(res=> console.log("Deleted!!!", res).catch(err => console.log(err))
 
)
}
  return (
    <>
     <h3>Customers</h3>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer ID</TableCell>
            <TableCell align="right">Customer Name</TableCell>
            <TableCell align="right">Church</TableCell>
            <TableCell align="right">Diocese</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Update</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {apiData.map((customer) => (
            <TableRow
              key={customer.custID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {customer.custID}
              </TableCell>
              <TableCell align="right">{customer.custName}</TableCell>
              <TableCell align="right">{customer.church}</TableCell>
              <TableCell align="right">{customer.diocese}</TableCell>
              <TableCell align="right">{customer.phoneNumber}</TableCell>
              <TableCell align="right">
                <Link to={"/update/"+customer.custID}>
                <button onClick={()=> setData(customer.custID, customer.custName, customer.church,customer.diocese,customer.phoneNumber)}>Update</button>
                {/* onClick={()=> setID(getData.data.id)} */}
                </Link>
</TableCell>
              <TableCell align="right">
                {/* <Link to="/delete"> */}
                <button onClick={(e) => onDelete(customer.custID, e)}>Delete</button>
                {/* </Link> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br></br>
    <CustForm/>
    {/* <Test /> */}
  </>
  );
}
export default Customers
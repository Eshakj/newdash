// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@material-ui/core/Paper'
import things from "../database/database.json"
// import Test from "./Forms/Test"
// import CustForm from "./Forms/CustForm"
import CustForm2 from './Forms/CustForm2';


const Customers = () =>{
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
          </TableRow>
        </TableHead>
        <TableBody>
          {things.customers.map((customer) => (
            <TableRow
              key={customer.customer_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {customer.customer_id}
              </TableCell>
              <TableCell align="right">{customer.name}</TableCell>
              <TableCell align="right">{customer.church}</TableCell>
              <TableCell align="right">{customer.diocese}</TableCell>
              <TableCell align="right">{customer.phone_number}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br></br>
    
    {/* <Test /> */}
    <CustForm2 />
  </>
  );
}
export default Customers
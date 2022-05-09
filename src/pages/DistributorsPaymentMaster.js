import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@material-ui/core/Paper'
import things from "../database/database.json"

const DistributorsPaymentMaster = () => {
  return (
    <>
    <h3>DISTRIBUTOR PAYMENT MASTER</h3>
    
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Payment ID</TableCell>
            <TableCell align="right">Payment Date</TableCell>
            <TableCell align="right">Payment Mode</TableCell>
            <TableCell align="right">Payment Code</TableCell>
            <TableCell align="right">Invoice Number</TableCell>
            <TableCell align="right">Amount</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {things.distributor_payment_master.map((distributor) => (
            <TableRow
              key={distributor.payment_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {distributor.payment_id}
              </TableCell>
              <TableCell align="right">{distributor.payment_date}</TableCell>
s              <TableCell align="right">{distributor.payment_mode}</TableCell>
              <TableCell align="right">{distributor.payment_code}</TableCell>
              <TableCell align="right">{distributor.invoice_number}</TableCell>
              <TableCell align="right">{distributor.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  {/* <Form /> */}
  </>
  )
}

export default DistributorsPaymentMaster
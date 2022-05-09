import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@material-ui/core/Paper'
import things from "../database/database.json"


const DistributorsPaymentAllocation = () => {
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 750 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Payment ID</TableCell>
            <TableCell align="right">Invoice Sub-Number</TableCell>
            <TableCell align="right">Amount Allocated</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {things.distributor_payment_allocation.map((distributor) => (
            <TableRow
              key={distributor.payment_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {distributor.payment_id}
              </TableCell>
              <TableCell align="right">{distributor.invoice_subnumber}</TableCell>
              <TableCell align="right">{distributor.amount_allocated}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  {/* <Form /> */}
  </>
  )
}

export default DistributorsPaymentAllocation
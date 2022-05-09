import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@material-ui/core/Paper'
import things from "../database/database.json"

const DistributorsInvoiceTxn = () => {
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Invoice Number</TableCell>
            <TableCell align="right">Invoice Sub-Number</TableCell>
            <TableCell align="right">Customer ID</TableCell>
            <TableCell align="right">Product Code</TableCell>
            <TableCell align="right">Rate</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">VAT</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Product Serial</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {things.distributor_invoice_txn.map((distributor) => (
            <TableRow
              key={distributor.invoice_number}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {distributor.invoice_number}
              </TableCell>
              <TableCell align="right">{distributor.invoice_subnumber}</TableCell>
              <TableCell align="right">{distributor.customer_id}</TableCell>
              <TableCell align="right">{distributor.product_code}</TableCell>
              <TableCell align="right">{distributor.rate}</TableCell>
              <TableCell align="right">{distributor.amount}</TableCell>
              <TableCell align="right">{distributor.vat}</TableCell>
              <TableCell align="right">{distributor.total}</TableCell>
              <TableCell align="right">{distributor.product_serial}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  {/* <Form /> */}
  </>
  )
}

export default DistributorsInvoiceTxn
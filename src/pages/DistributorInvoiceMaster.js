import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@material-ui/core/Paper'
import things from "../database/database.json"

const DistributorInvoiceMaster = () => {
  return (
    <>
   
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Distributor Code</TableCell>
            <TableCell align="right">Diocese Code</TableCell>
            <TableCell align="right">Invoice Number</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Ship To</TableCell>
            <TableCell align="right">Terms</TableCell>
            <TableCell align="right">Ship Date</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {things.distributor_invoice_master.map((distributor) => (
            <TableRow
              key={distributor.distributor_code}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {distributor.distributor_code}
              </TableCell>
              <TableCell align="right">{distributor.diocese_code}</TableCell>
              <TableCell align="right">{distributor.invoice_number}</TableCell>
              <TableCell align="right">{distributor.date}</TableCell>
              <TableCell align="right">{distributor.ship_to}</TableCell>
              <TableCell align="right">{distributor.terms}</TableCell>
              <TableCell align="right">{distributor.ship_date}</TableCell>
              <TableCell align="right">{distributor.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  {/* <Form /> */}
  </>
  )
}

export default DistributorInvoiceMaster
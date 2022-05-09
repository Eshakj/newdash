import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@material-ui/core/Paper'
import things from "../database/database.json"

const Supplier = () => {
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Supplier Code</TableCell>
            <TableCell align="right">Supplier Name</TableCell>
            <TableCell align="right">Supplier Pin</TableCell>
            <TableCell align="right">Supplier Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {things.supplier_master.map((supplier) => (
            <TableRow
              key={supplier.supplier_code}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {supplier.supplier_code}
              </TableCell>
              <TableCell align="right">{supplier.supplier_name}</TableCell>
              <TableCell align="right">{supplier.supplier_pin}</TableCell>
              <TableCell align="right">{supplier.supplier_address}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  {/* <Form /> */}
  </>
  )
}

export default Supplier
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@material-ui/core/Paper'
import things from "../database/database.json"

const VatMaster = () => {
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 350 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>VAT Code</TableCell>
            <TableCell align="right">VAT Percent</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {things.vat_master.map((distributor) => (
            <TableRow
              key={distributor.vat_code}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {distributor.vat_code}
              </TableCell>
              <TableCell align="right">{distributor.vat_percent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  {/* <Form /> */}
  </>
  )
}

export default VatMaster
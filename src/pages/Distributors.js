import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@material-ui/core/Paper'
// import Form from '../components/Form';
import things from "../database/database.json"

const Distributors = () => {
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Distributor code</TableCell>
            <TableCell align="right">Distributor Name</TableCell>
            <TableCell align="right">Distributor Contact</TableCell>
            <TableCell align="right">Distributor Phone</TableCell>
            <TableCell align="right">Distributor Email</TableCell>
            <TableCell align="right">Distributor VAT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {things.distributor_master.map((distributor) => (
            <TableRow
              key={distributor.distributor_code}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {distributor.distributor_code}
              </TableCell>
              <TableCell align="right">{distributor.distributor_name}</TableCell>
              <TableCell align="right">{distributor.distributor_contact}</TableCell>
              <TableCell align="right">{distributor.distributor_phone}</TableCell>
              <TableCell align="right">{distributor.distributor_email}</TableCell>
              <TableCell align="right">{distributor.distributor_vat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  {/* <Form /> */}
  </>
    
  )
}

export default Distributors
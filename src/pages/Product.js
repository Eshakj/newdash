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

const Product = () => {
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Code</TableCell>
            <TableCell align="right">Product Name</TableCell>
            <TableCell align="right">Product Cost Price</TableCell>
            <TableCell align="right">Product Sell Price</TableCell>
            <TableCell align="right">Product VAT</TableCell>
            <TableCell align="right">Product Deposit</TableCell>
            <TableCell align="right">Product Installment Amount</TableCell>
            <TableCell align="right">Product Installment Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {things.product_master.map((product) => (
            <TableRow
              key={product.product_code}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.product_code}
              </TableCell>
              <TableCell align="right">{product.product_name}</TableCell>
              <TableCell align="right">{product.product_costprice}</TableCell>
              <TableCell align="right">{product.product_sellprice}</TableCell>
              <TableCell align="right">{product.product_vat}</TableCell>
              <TableCell align="right">{product.product_deposit}</TableCell>
              <TableCell align="right">{product.product_installment_amount}</TableCell>
              <TableCell align="right">{product.product_installment_count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  {/* <Form /> */}
  </>
  )
}

export default Product
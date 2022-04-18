// import { Typography } from '@material-ui/core'
// import React from 'react'

// function Product() {
//   return (
//     <>
//       <div>
//         <Typography>My product</Typography>
//       </div>
//     </>
//   )
// }

// export default Product

import things from "../database/database.json";

const Product = () => {
  // const { details, setDetails } = useState(things.customers);
  console.log(things.product_master);

  return (
    <div className="App">
      <h3>PRODUCT MASTER</h3>
      <table>
        <thead>
          <tr>
            <th>Product Code</th>
            <th>Product Name</th>
            <th>Product Cost Price</th>
            <th>Product Sell Price</th>
            <th>Product Vat</th>
            <th>Product Deposit</th>
            <th>Product Installment Amount</th>
            <th>Product Installment Count</th>
          </tr>
        </thead>
        <tbody>
          {things.product_master.map((product) => (
            <tr>
              <td>{product.product_code}</td>
              <td>{product.product_name}</td>
              <td>{product.product_costprice}</td>
              <td>{product.product_sellprice}</td>
              <td>{product.product_vat}</td>
              <td>{product.product_deposit}</td>
              <td>{product.product_installment_amount}</td>
              <td>{product.product_installment_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;


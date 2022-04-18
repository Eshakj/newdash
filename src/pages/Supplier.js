// import { Typography } from '@material-ui/core'
// import React from 'react'

// function Supplier() {
//   return (
//     <>
//       <div>
//         <Typography>My Supplier</Typography>
//       </div>
//     </>
//   )
// }

// export default Supplier

import things from "../database/database.json";

const Supplier = () => {
  // const { details, setDetails } = useState(things.customers);
  //   console.log(things.customers);

  return (
    <div className="App">
      <h3>SUPPLIER MASTER</h3>
      <table>
        <thead>
          <tr>
            <th>Supplier Code</th>
            <th>Supplier Name</th>
            <th>Supplier Pin</th>
            <th>Supplier Address</th>
          </tr>
        </thead>
        <tbody>
          {things.supplier_master.map((supplier) => (
            <tr>
              <td>{supplier.supplier_code}</td>
              <td>{supplier.supplier_name}</td>
              <td>{supplier.supplier_pin}</td>
              <td>{supplier.supplier_address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Supplier;


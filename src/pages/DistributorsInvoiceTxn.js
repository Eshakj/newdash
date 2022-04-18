
import things from "../database/database.json";

const Distinvtxn = () => {
  // const { details, setDetails } = useState(things.customers);

  return (
    <div className="App">
      <h3>Distributor Invoice Txn</h3>
      <table>
        <thead>
          <tr>
            <th>Invoice Number</th>
            <th>Invoice Sub Number</th>
            <th>Customer ID</th>
            <th>Product Code</th>
            <th>Rate</th>
            <th>Amount</th>
            <th>Vat</th>
            <th>Total</th>
            <th>Product Serial</th>
          </tr>
        </thead>
        <tbody>
          {things.distributor_invoice_txn.map((distributor) => (
            <tr>
              <td>{distributor.invoice_number}</td>
              <td>{distributor.invoice_subnumber}</td>
              <td>{distributor.customer_id}</td>
              <td>{distributor.product_code}</td>
              <td>{distributor.rate}</td>
              <td>{distributor.amount}</td>
              <td>{distributor.vat}</td>
              <td>{distributor.total}</td>
              <td>{distributor.product_serial}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Distinvtxn;


import things from "../database/database.json";

const Dpa = () => {
  // const { details, setDetails } = useState(things.customers);

  return (
    <div className="App">
      <h3>DISTRIBUTOR PAYMENT ALLOCATION</h3>
      <table>
        <thead>
          <tr>
            <th>Payment ID</th>
            <th>Invoice Sub Number</th>
            <th>Amount Allocated</th>
          </tr>
        </thead>
        <tbody>
          {things.distributor_payment_allocation.map((distributor) => (
            <tr>
              <td>{distributor.payment_id}</td>
              <td>{distributor.invoice_subnumber}</td>
              <td>{distributor.amount_allocated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dpa;

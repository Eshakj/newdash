
import things from "../database/database.json";

const Dpm = () => {
  // const { details, setDetails } = useState(things.customers);

  return (
    <div className="App">
      <h3>DISTRIBUTOR PAYMENT MASTER</h3>
      <table>
        <thead>
          <tr>
            <th>Payment ID</th>
            <th>Payment Date</th>
            <th>Payment Mode</th>
            <th>Payment Code</th>
            <th>Amount</th>
            <th>Invoice Number</th>
          </tr>
        </thead>
        <tbody>
          {things.distributor_payment_master.map((distributor) => (
            <tr>
              <td>{distributor.payment_id}</td>
              <td>{distributor.payment_date}</td>
              <td>{distributor.payment_mode}</td>
              <td>{distributor.payment_code}</td>
              <td>{distributor.amount}</td>
              <td>{distributor.invoice_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dpm;

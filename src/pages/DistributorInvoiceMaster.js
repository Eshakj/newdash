
import things from "../database/database.json";

const Distinv = () => {
  // const { details, setDetails } = useState(things.customers);

  return (
    <div className="App">
      <h3>Distributor Invoice Master</h3>
      <table>
        <thead>
          <tr>
            <th>Distributor Code</th>
            <th>Diocese Code</th>
            <th>Invoice Number</th>
            <th>Date</th>
            <th>Ship To</th>
            <th>Terms</th>
            <th>Ship Date</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {things.distributor_invoice_master.map((distributor) => (
            <tr>
              <td>{distributor.distributor_code}</td>
              <td>{distributor.diocese_code}</td>
              <td>{distributor.invoice_number}</td>
              <td>{distributor.date}</td>
              <td>{distributor.ship_to}</td>
              <td>{distributor.terms}</td>
              <td>{distributor.ship_date}</td>
              <td>{distributor.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Distinv;

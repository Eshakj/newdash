
import things from "../database/database.json";

const Distributors = () => {
  // const { details, setDetails } = useState(things.customers);

  return (
    <div className="App">
      <h3>Distributor Master</h3>
      <table>
        <thead>
          <tr>
            <th>Distributor Code</th>
            <th>Distributor Name</th>
            <th>Distributor Contact</th>
            <th>Distributor Phone</th>
            <th>Distributor Email</th>
            <th>Distributor Vat</th>
          </tr>
        </thead>
        <tbody>
          {things.distributor_master.map((distributor) => (
            <tr>
              <td>{distributor.distributor_code}</td>
              <td>{distributor.distributor_name}</td>
              <td>{distributor.distributor_contact}</td>
              <td>{distributor.distributor_phone}</td>
              <td>{distributor.distributor_email}</td>
              <td>{distributor.distributor_vat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Distributors;

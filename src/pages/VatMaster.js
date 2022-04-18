
import things from "../database/database.json";

const Vat = () => {
  // const { details, setDetails } = useState(things.customers);
  console.log(things.customers);

  return (
    <div className="App">
      <h3>VAT MASTER</h3>
      <table>
        <thead>
          <tr>
            <th>Vat Code</th>
            <th>Vat Percent</th>
          </tr>
        </thead>
        <tbody>
          {things.vat_master.map((vat) => (
            <tr>
              <td>{vat.vat_code}</td>
              <td>{vat.vat_percent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Vat;

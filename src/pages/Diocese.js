
import things from "../database/database.json";

const Diocese = () => {
  // const { details, setDetails } = useState(things.customers);

  return (
    <div className="App">
      <h3>DIOCESE MASTER</h3>
      <table>
        <thead>
          <tr>
            <th>Diocese Code</th>
            <th>Distributor Code</th>
            <th>Diocese Name</th>
            <th>County</th>
            <th>Sub County</th>
          </tr>
        </thead>
        <tbody>
          {things.diocese_master.map((diocese) => (
            <tr>
              <td>{diocese.diocese_code}</td>
              <td>{diocese.distributor_code}</td>
              <td>{diocese.diocese_name}</td>
              <td>{diocese.county}</td>
              <td>{diocese.sub_county}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Diocese;

        
    

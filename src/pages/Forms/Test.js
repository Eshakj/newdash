import React , {useState} from 'react'
// import { nanoid } from "nanoid";
// import "./Test.css";
import things from "../../database/database.json"
// import data from "../../database/mock.json";
// import ReadOnlyRow from "./components/ReadOnlyRow";
// import EditableRow from "./components/EditableRow";

const Test = () => {

    const [contacts, setContacts] = useState(things);
    const [addFormData, setAddFormData] = useState({
      customerID: "",
      name: "",
      church: "",
      diocese: "",
      phoneNumber: "",
    });
    const handleAddFormChange =(event) =>{
      event.preventDefault();
      const fieldName = event.target.getAttribute("name")
      const fieldValue  = event.target.value
      const newFormData = {...addFormData}
      newFormData[fieldName] = fieldValue
    setAddFormData(newFormData)
    }
    const handleAddFormSubmit = (event)=>{
      event.preventDefault();
      const newContact = {
        customerID: "",
        name: "",
        church: "",
        diocese: "",
        phoneNumber: "",
      }
      const newContacts = [...contacts, newContact]
      setContacts(newContacts)



    }
  return (
    <div className="app-container">
    

      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an addres..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

  


export default Test
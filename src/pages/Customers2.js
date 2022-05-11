import React, { useState } from 'react'
import "../pages/Forms/Test.css"
import data from "../database/mock.json"
import {nanoid} from "nanoid"

const CustForm2 = () => {
    const [contacts, setContacts] = useState(data)
    const [addFormData, setAddFormData] = useState({
        fullName: "",
        address: "",
        phoneNumber:"",
        email:""

    })
    const handleAddFormChange=(event)=>{
event.preventDefault()
const fieldName = event.target.getAttribute("name")
const fieldValue = event.target.value
const newFormData = {...addFormData};
newFormData[fieldName] = fieldValue
// setAddFormData((pre,event)=>{
//     event.preventDefault()
//     return [...pre, newFormData]
// })
setAddFormData(newFormData)
alert("added")

    }
    const handleAddFormSubmit =(event)=>{
        event.preventDefault()
        const newContact={
            id: nanoid(),
            fullName: addFormData.fullName,
            address: addFormData.address,
            phoneNumber: addFormData.phoneNumber,
            email: addFormData.email
        }
        const newContacts = [...contacts, newContact]
        setContacts(newContacts)
    }

  return (
    <div className='app-container'>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    </tr>
            </thead>
            <tbody>
                {contacts.map((contact)=>{
                    return(
                        <tr>
                        <td>{contact.fullName}</td>
                        <td>{contact.address}</td>
                        <td>{contact.phoneNumber}</td>
                        <td>{contact.email}</td>
                    </tr>
                    )
                 
                })}
                
            </tbody>
        </table>
        <h2>Add a contatct</h2>
        <form> 
            <input type="text" name="fullName" required="required" placeholder='Enter name...'onChange={handleAddFormChange} ></input>
            <input type="text" name="address" required="required" placeholder='Enter address...'onChange={handleAddFormChange}></input>
            <input type="text" name="phoneNumber" required="required" placeholder='Enter Phone Number...'onChange={handleAddFormChange}></input>
            <input type="text" name="email" required="required" placeholder='Enter email...'onChange={handleAddFormChange}></input>
            <button type="submit" onSubmit={handleAddFormSubmit}> Add</button>
        </form>
    </div>
  )
}

export default CustForm2
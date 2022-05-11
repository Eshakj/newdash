import React,{useState} from 'react'
import 'antd/dist/antd.css';
import "../App.css"
import {Table, Button} from "antd"


const Customer3 = () => {
    const [dataSource, setDataSource] = useState([
        {
           id: 1,
           name: 'John',
           email:"john@gmail.com",
           address: "John Address"
        },
        {
            id: 2,
            name: 'David',
            email:"david@gmail.com",
            address: "David Address"
         },
         {
            id: 3,
            name: 'James',
            email:"james@gmail.com",
            address: "James Address"
         },
         {
            id: 4,
            name: 'Sam',
            email:"sam@gmail.com",
            address: "Sam Address"
         }
    ])
    const columns = [
        {
            key: "1",
            title: "ID",
            dataIndex: "id"
        },
        {
            key: "2",
            title: "Name",
            dataIndex: "name"
        },
        {
            key: "3",
            title: "Email",
            dataIndex: "email"
        },
        {
            key: "4",
            title: "Address",
            dataIndex: "address"
        }
    ]
  
    
    const onAddStudent = ()=>{
        const randomNumber = parseInt(Math.random()*1000)
        const newStudent = {
           id: randomNumber,
            name: 'Name',
            email:"sam@gmail.com",
            address: "Address"
         }
setDataSource(pre=>{
    return [...pre, newStudent]
})
    }
  return (
    <div className="Table">
    <header className="Table-header">
        <Table
        columns={columns}
        dataSource={dataSource}
        ></Table>
        <Button onClick={onAddStudent}>Add New Student</Button>
    </header>
</div>
  )
}

export default Customer3
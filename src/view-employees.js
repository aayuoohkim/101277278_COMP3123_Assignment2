import axios from "axios";
import React, {useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Employees () {
    const [employeeList, setEmployeeList] = useState([]) 
    useEffect(() => {
        axios.get("https://comp3123-assign2-backend.herokuapp.com/api/emp/employees").then(res => {
            setEmployeeList(res.data.employees)
            console.log(res.data)
        })
    }, [])
    return (
        <>
            <Container>
                <Navbar expand="lg" variant="light" bg="light" className="mt-3">
                    <Container className="px-5 py-2">
                        <Navbar.Brand href="#">Assignment2: Employee Management</Navbar.Brand>
                        <Button variant="dark">Login</Button>
                    </Container>
                </Navbar>
            </Container>
            <Container>
                <div className="d-flex justify-content-end mt-5">
                    <Button variant="primary" href="/addEmployee">Add</Button>
                </div>
                <Table className="text-center">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {employeeList.map((employee, key) => 
                        <tr style={{verticalAlign: 'middle'}}>
                            <td>{employee.first_name}</td>
                            <td>{employee.last_name}</td>
                            <td>{employee.email}</td>
                            <td>
                                <Button variant="success" href={`/updateEmployee/${employee._id}`}>Update</Button>
                                <Button variant="danger" className="ms-2">Delete</Button>
                                <Button variant="secondary" className="ms-2">View</Button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default React.memo(Employees)
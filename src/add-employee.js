import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button, Card } from 'react-bootstrap';


function AddEmployee () {
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        const first_name = e.target.firstname.value
        const last_name = e.target.lastname.value
        const email = e.target.email.value
        const salary = e.target.salary.value
        const gender = e.target.gender.value

        axios.post("https://comp3123-assign2-backend.herokuapp.com/api/emp/employees", { first_name, last_name, email, salary, gender }).then(res => {
            navigate("/viewEmployees")
        })
    }

    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
                <Card style={{width: '30rem'}} className="p-3">
                    <Card.Title className="text-center">
                        <h1>Add Employee</h1>
                    </Card.Title>
                    <Card.Body>
                        <Form onSubmit={onSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="firstname">First Name</Form.Label>
                                <Form.Control id="firstname" type="text" placeholder="Enter First Name" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="lastname">Last Name</Form.Label>
                                <Form.Control id="lastname" type="text" placeholder="Enter Last Name" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="email">Email</Form.Label>
                                <Form.Control id="email" type="email" placeholder="Enter Email" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="salary">Salary</Form.Label>
                                <Form.Control id="salary" type="text" placeholder="Enter Salary" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="gender">Gender</Form.Label>
                                <Form.Select id="gender">
                                    <option>Select</option>
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                    <option value="other">Other</option>
                                </Form.Select>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default AddEmployee
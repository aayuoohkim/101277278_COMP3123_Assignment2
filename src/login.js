import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button, Card } from 'react-bootstrap';

function Login () {
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        const username = e.target.username.value
        const password = e.target.password.value
        axios.post("https://comp3123-assign2-backend.herokuapp.com/api/user/login", { username, password }).then(res => {
            navigate("/viewEmployees")
        })
    }
    
    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
                <Card style={{width: '20rem'}} className="p-3">
                    <Card.Title className="text-center">
                        <h1>Login</h1>
                    </Card.Title>
                    <Card.Body>
                        <Form onSubmit={onSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="username">Username</Form.Label>
                                <Form.Control id="username" type="text" placeholder="Enter username" />
                                <Form.Text className="text-muted">
                                    We'll never share your information with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="password">Password</Form.Label>
                                <Form.Control id="password" type="password" placeholder="Password" />
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

export default Login
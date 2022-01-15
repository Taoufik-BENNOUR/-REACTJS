import React from 'react'
import { Form,Button,Control } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control className='col-3' type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Form.Select className='mb-3 col-md-2' aria-label="Default select example">
  <option>Rate our service</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</Form.Select>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
            
        </>
    )
}

export default Header

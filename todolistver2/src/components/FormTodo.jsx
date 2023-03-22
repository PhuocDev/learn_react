import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

;
const FormTodo = (props) => {
    const {addTodo} = props;

    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        //su dung ham tu component cha
        addTodo({
            id: Math.random() * 10000000,
            text: value
        })
        setValue("");
    }

    const handleChange = e => {
        setValue(e.target.value);
    }
    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group>
            <Form.Label><b>Add Todo</b></Form.Label>
            <Form.Control type="text" className="input" value={value} onChange={handleChange} placeholder="Add new todo" />
            </Form.Group>
            <Button variant="primary m-3" type="submit">
            Submit
            </Button>
        </Form>
    );
}
 
export default FormTodo;
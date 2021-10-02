import React from 'react'
import Table from 'react-bootstrap/Table'
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";
import "./Sales.css";

export default function Sales() {
    return (
        <div  className="Sales">
            
            <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridNmCte">
                    <Form.Control type="text" placeholder="Nombre Cliente" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridDirCte">
                    <Form.Control type="text" placeholder="Dirección" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridTelCte">
                    <Form.Control type="text" placeholder="Telefono" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmailCte">
                    <Form.Control type="email" placeholder="Email" />
                </Form.Group>

            </Row>


            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridBarCode">
                    <Form.Control type="text" placeholder="Código Barras" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridNomProd">
                    <Form.Control type="text" placeholder="Nombre Producto" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCanti">
                    <Form.Control type="text" placeholder="Cantidad" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridVrUnit">
                    <Form.Control type="email" placeholder="Valor unitario" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridVrToal">
                    <Form.Control type="email" placeholder="Valor Total" />
                </Form.Group>

            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
                </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    )
}

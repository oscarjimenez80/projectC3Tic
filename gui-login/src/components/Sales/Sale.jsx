import React from 'react'
import {useState} from 'react'
import Table from 'react-bootstrap/Table'
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from 'react-bootstrap/Alert'

import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "./Sales.css";
import SaleDetail from './SaleDetail';




export default function Sale() {

    const [show, setShow] = useState(false);

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
                <Form.Group as={Col} controlId="formGridCodBar">
                    <Form.Control type="text" placeholder="Código de Barras" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridNomOProducto">
                    <Form.Control type="text" placeholder="Nombre Producto" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridCntProd">
                    <Form.Control type="email" placeholder="Cantidad" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridValorProd">
                    <Form.Control type="text" placeholder="Valor Producto" />
                </Form.Group>


            </Row>

           

            
           

            <div className="d-flex justify-content-end">

            <Button onClick={() => setShow(false)} variant="outline-success">
                Nuevo Producto
            </Button>
        </div>
        {!show && <Button onClick={() => setShow(true)}>Agregar Producto</Button>}

            <Alert show={show} variant="success">
              <Alert.Heading>Producto Almacenado Exitosamente</Alert.Heading></Alert>
            </Form>

            <div>

            <Table striped bordered hover size="sm">
                
                <thead>
                <tr>
                    <th>Cantidad</th>
                    <th>Código de Barras</th>
                    <th>Nombre de Producto</th>
                    <th>Valor Unitario</th>
                    <th>Valor Total</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>7787512277758</td>
                    <td>Teclado Genius Español</td>
                    <td>$ 35.000</td>
                    <td>$ 35.000</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>7701245782121</td>
                    <td>Impresora Termica 58 mm</td>
                    <td>$170.000</td>
                    <td>$340.000</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>7701245785641</td>
                    <td>Pistola Lectora Codigo de Barras</td>
                    <td>$120.000</td>
                    <td>$360.000</td>
                </tr>
                </tbody>
                </Table>
          </div>          
         <div>
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Text>Sub-Total $</InputGroup.Text>
                        <FormControl aria-label="" />
                    <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>I.V.A. $</InputGroup.Text>
                        <FormControl aria-label="" />
                    <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Text>TOTAL $</InputGroup.Text>
                        <FormControl aria-label="" />
                    <InputGroup.Text>.00</InputGroup.Text>
                </InputGroup>
            </div>
        </div>

        </div>
        

        
    )

    

}

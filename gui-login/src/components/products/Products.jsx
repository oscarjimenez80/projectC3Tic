import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import "./Product.css";

export default function Products() {
    return (
        
 <      div class="Product">
                <div class="AddProd">

                        <Button variant="dark">Nuevo Producto</Button>{' '}
                        

                </div>
               <Table striped bordered hover size="sm">
                
                <thead>
                <tr>
                    <th>Codigo de Barras</th>
                    <th>Nombre/Descripción</th>
                    <th>Valor de Compra</th>
                    <th>Valor de Venta</th>
                    <th>Operación</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>77052250022</td>
                    <td>Teclado Genius</td>
                    <td>$28.000</td>
                    <td>$35.000</td>
                    <td>                   
                        <Button variant="success">Agregar Invetario</Button>{' '}
                        <Button variant="primary">Editar</Button>{' '}
                        <Button variant="danger">Eliminar</Button>{' '}
                    </td>                        
                    
                </tr>
                <tr>
                    <td>77054551224</td>
                    <td>Impresora POS</td>
                    <td>$158.000</td>
                    <td>$180.000</td>
                    <td>                   
                        <Button variant="success">Agregar Invetario</Button>{' '}
                        <Button variant="primary">Editar</Button>{' '}
                        <Button variant="danger">Eliminar</Button>{' '}
                    </td>                        
                    
                </tr>
                <tr>
                    <td>770522121551</td>
                    <td>Lector de Barras</td>
                    <td>$118.000</td>
                    <td>$180.000</td>
                    <td>                   
                        <Button variant="success">Agregar Invetario</Button>{' '}
                        <Button variant="primary">Editar</Button>{' '}
                        <Button variant="danger">Eliminar</Button>{' '}
                    </td>                        
                    
                </tr>
                </tbody>
                </Table>            
        </div>
    )
}

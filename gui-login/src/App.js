import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './components/login/Login'
import Home from './components/home/Home'
import Sales from './components/Sales/Sale'
import Product from './components/products/Products'

import { Navbar, Nav, Container, Dropdown, NavItem, NavLink } from 'react-bootstrap';
import SaleList from './components/Sales/SaleList';



function App() {
  return (

    
    <>
    <Navbar bg="primary" variant="dark">
    <Container>
    <Nav className="me-auto">

    <Dropdown as={NavItem}>
      <Dropdown.Toggle as={NavLink}>Ventas</Dropdown.Toggle>
      <Dropdown.Menu>
          <Dropdown.Item href="/sales">Nueva Venta</Dropdown.Item>
          <Dropdown.Item href="/SalesList">Detalle de venta</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>;

    <Dropdown as={NavItem}>
      <Dropdown.Toggle as={NavLink}>Productos</Dropdown.Toggle>
      <Dropdown.Menu>
          <Dropdown.Item href="/Products">Gestion de Producto</Dropdown.Item>
          <Dropdown.Item href="/Inventario">Inventario</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>;


    <Nav.Link href="/usuarios">Usuarios</Nav.Link>
    <Nav.Link href="/clientes">Clientes</Nav.Link>

    </Nav>
    <Nav>
      <Nav.Link href="/">Logout</Nav.Link>

    </Nav>
    </Container>
  </Navbar>
      <Router>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route exact path='/home' component={Home} />
              <Route exact path='/sales' component={Sales} />
              <Route exact path='/SalesList' component={SaleList} />
              <Route exact path='/Products' component={Product} />
              
            </Switch>
      </Router>
    </>
  );
}

export default App;



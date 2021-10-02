import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Login from './components/login/Login'
import Home from './components/home/Home'
import Sales from './components/sales/Sales'
import { Navbar, Nav, Container } from 'react-bootstrap';


function App() {
  return (

    
    <>
    <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="/sales">Ventas</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/clientes">Clientes</Nav.Link>
      <Nav.Link href="/proveedores">Proveedores</Nav.Link>
      <Nav.Link href="/usuarios">Usuarios</Nav.Link>
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
            </Switch>
      </Router>
    </>
  );
}

export default App;



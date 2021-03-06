import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function TopBar(req,res){
    return(
        <Navbar bg="light" expand="lg">
            <Image src = "/logo.png" width="75" height = "75"></Image>
            <Navbar.Brand href="/">Simple Pure (site em desenvolvimento)</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#promo">Promoções</Nav.Link>
                <Nav.Link href="/services">Serviços</Nav.Link>
                <Nav.Link href="/products">Produtos</Nav.Link>
                <Nav.Link href="/about">Sobre</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            
            </Navbar.Collapse>
        </Navbar>
    );
}
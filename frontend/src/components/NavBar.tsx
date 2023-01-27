import { Navbar, Container, Nav } from "react-bootstrap";
import { User } from "../models/user";
import NavbarLoggedInView from "./NavbarLoggedInView";
import NavbarLoggedOutView from "./NavbarLoggedOutView";
import { Link } from "react-router-dom";

interface NavarBarProps {
    loggedInUser?: User | null,
    onSignUpClicked: () => void,
    onLoginClicked: () => void,
    onLogoutSuccessful: () => void
}
const NavBar = ({loggedInUser, onSignUpClicked, onLoginClicked, onLogoutSuccessful}: NavarBarProps) => {
    return ( 
        <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Notes App
                </Navbar.Brand>

                <Navbar.Toggle arial-controls="main-navbar" />

                <Navbar.Collapse id="main-navbar">
                    <Nav>
                        <Nav.Link as={Link} to="/privacy">
                            Privacy
                        </Nav.Link>
                    </Nav>
                    <Nav className="ms-auto">
                        {loggedInUser
                        ? <NavbarLoggedInView
                            user={loggedInUser}
                            onLogoutSuccessful={onLogoutSuccessful}
                            />
                        : <NavbarLoggedOutView
                            onLoginClicked={onLoginClicked}
                            onSignUpClicked={onSignUpClicked}
                            />}
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
     );
}
 
export default NavBar;
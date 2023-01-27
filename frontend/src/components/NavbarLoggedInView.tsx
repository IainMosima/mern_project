import { Button, Navbar } from "react-bootstrap";
import { User } from "../models/user";
import * as NotesApi from "../network/note_api";

interface NavbarLoggedInViewProps {
    user: User,
    onLogoutSuccessful: () => void
}
const NavbarLoggedInView = ({user, onLogoutSuccessful}: NavbarLoggedInViewProps) => {
    async function logout() {
        try {
            await NotesApi.logout();
            onLogoutSuccessful();

        } catch (error) {
            alert(error);
            console.error(error);
        }
    }
    return ( 
        <>
            <Navbar.Text>
                Signed in as: {user.username}
            </Navbar.Text>
            
            <Button onClick={logout}>Log out</Button>
        </>
     );
}
 
export default NavbarLoggedInView;
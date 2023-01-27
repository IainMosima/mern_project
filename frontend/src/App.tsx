import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginModal from './components/LoginModal';
import Navbar from './components/NavBar';
import SignUpModal from './components/SignUpModal';
import { User } from "./models/user";
import * as NotesApi from "./network/note_api";
import { Container } from 'react-bootstrap';
import NotePage from './pages/NotesPages';
import PrivacyPage from './pages/PrivacyPage';
import NotFoundPage from './pages/NotFoundPage';
import styles from './styles/App.module.css';

function App(): JSX.Element {

  const [loggedInUser, setloggedInUser] = useState<User | null>(null);
  const [showLogInModal, setshowLogInModal] = useState(false);
  const [showSignUpModal, setshowSignUpModal] = useState(false);

  useEffect(() => {
    async function fetchLoggedInUser() {
      try {
        const user = await NotesApi.getLoggedInUser();
        setloggedInUser(user);
      } catch (error) {
        console.error(error);
      }
    }
    fetchLoggedInUser();
  }, [])
  

  return (
    <BrowserRouter>
      <div>
        <Navbar
        loggedInUser={loggedInUser}
        onSignUpClicked={() => setshowSignUpModal(true)}
        onLoginClicked={() => setshowLogInModal(true)}
        onLogoutSuccessful={() => setloggedInUser(null)}
        />

        <Container className={styles.pageContainer}>
          <Routes>

            <Route
              path='/'
              element={<NotePage loggedInUser={loggedInUser}/>}
            />

            <Route
              path='/privacy'
              element={<PrivacyPage/>}
            />
            <Route 
             path='/*'
             element={<NotFoundPage />}
            />

          </Routes>
        </Container>

        {showSignUpModal &&
          <SignUpModal
          onDismiss={() => setshowSignUpModal(false)}
          onSignUpSuccessfull={(user) => {
            setloggedInUser(user);
            setshowSignUpModal(false)
          }}
          />
      }

      {showLogInModal &&
        <LoginModal
        onDismiss={() => setshowLogInModal(false)}
        onLoginSuccessful={(user) => { 
          setloggedInUser(user);
          setshowLogInModal(false);
        }}
        />
      }
      </div>
    </BrowserRouter>
  );
}

export default App;
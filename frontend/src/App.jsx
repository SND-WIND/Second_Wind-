import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUpPage from './pages/SignUp';
import PersonalQuestionSignUp from './pages/PersonalQuestionSignUp';
import LoginPage from './pages/Login';
import SiteHeadingAndNav from './components/SiteHeadingAndNav';
import NotFoundPage from './pages/NotFound';
import UserContext from './contexts/current-user-context';
import { checkForLoggedInUser } from './adapters/auth-adapter';
import UsersPage from './pages/Users';
import UserPage from './pages/User';
import LandingPage from './pages/LandingPage';
import SettingsPage from './pages/Settings';
import ConnectPage from './pages/ConnectionPage';
import NewsPage from './pages/NewsPage';
import JobsPage from './pages/JobsPage';
import BookmarksPage from './pages/Bookmarks';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#A674FE', //main color purple
    },

  },
});

export default function App() {
  const { setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    checkForLoggedInUser().then(setCurrentUser);
  }, [setCurrentUser]);




  return (
    <div>
      <ThemeProvider theme={theme}>

        {/* <SiteHeadingAndNav /> */}

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/landing' element={<LandingPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/sign-up' element={<SignUpPage />} />
            <Route path='/users' element={<UsersPage />} />
            <Route path='/users/:id' element={<UserPage />} />
            <Route path='/businesses/:id' element={<UserPage />} />
            <Route path='/settings' element={<SettingsPage />} />
            <Route path='/connect' element={<ConnectPage />} />
            <Route path='/news' element={<NewsPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path='/bookmarks' element={<BookmarksPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </main>


      </ThemeProvider>
    </div>
  );
}

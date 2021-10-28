import ProvideAuth from '../Authentication/ProvideAuth';
import PrivateRoute from '../Authentication/PrivateRoute';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from '../../views/LoginPage';
import RegistrationPage from '../../views/RegistrationPage';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import ProfilePage from '../../views/Profile';
import HomePage from '../../views/Home/HomePage';
import AdminDashboard from '../../views/AdminDashboard';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#6984E1"
      }
    },
  });

  return (
    <ProvideAuth>
      <ThemeProvider theme={theme}>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/login">
            <LoginPage/>
          </Route>
          <Route exact path="/register">
            <RegistrationPage/>
          </Route>
          <PrivateRoute exact path="/dashboard">
            <AdminDashboard/>
          </PrivateRoute>
          <PrivateRoute exact path="/profile">
            <ProfilePage
              username="user"
              email="user@user.com"
              password="user"
            />
          </PrivateRoute>
        </Switch>
      </Router>
      </ThemeProvider>
    </ProvideAuth>
  );
}

export default App;

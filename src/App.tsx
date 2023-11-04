import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RegistrationPage } from './pages/RegistrationPage';
import { Dashboard } from './pages/Dashboard';
import { Details } from './pages/Details';
import { AuthorisationPage } from './pages/AuthorisationPage';
import { CreateNewOffer} from './pages/CreateNewOffer';

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<AuthorisationPage/>} />
          <Route path="/registration" element={<RegistrationPage/>} />
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/create" element={<CreateNewOffer/>} />
          <Route path="/details" element={<Details/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

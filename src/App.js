import React from 'react';
import './App.css';
import PlanLayout from './pages/Layouts/PlanLayout';
import Welcome from './pages/Welcome';
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm';
import 'bootstrap/dist/css/bootstrap.min.css'
import AllowNotification from './pages/AllowNotification';
import AppLayout from './pages/Layouts/AppLayout';
import Home from './components/Home';
import Explore from './pages/Explore';
import Profile from './pages/Profile'
import Upcoming from './pages/Upcoming';
import Activity from './pages/Activity';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<PlanLayout />} >
            <Route path='' element={<Welcome />} />
            <Route path='invite' element={<PhoneConfirmation />} />
            <Route path='code_confirm' element={<CodeConfirm />} />
            <Route path='allow_notification' element={<AllowNotification />} />
          </Route>
          <Route path='/' element={<AppLayout />}>
            <Route path='home' element={<Home />} />
            <Route path='explore' element={<Explore />} />
            <Route path='profile' element={<Profile />} />
            <Route path='upcoming' element={<Upcoming />} />
            <Route path='activity' element={<Activity />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

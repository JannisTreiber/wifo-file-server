import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './Pages/HomePage'
import VideoListPage from './Pages/VideoListPage'
import ErrorPage from './Pages/ErrorPage'
import { Alert } from '@mui/material'
import './App.css'

//data
import wifoIIaData from './data/wifoIIaData'
import wifoIIbData from './data/wifoIIbData'

//React Router Dom
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

function App() {

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertseverity, setAlertSeverity] = useState('warning');
  const [alertMessage, setAlertMessage] = useState('');

  const handleOpenAlert = (message, severity) => {
    setAlertSeverity(severity);
    setAlertMessage(message);
    setAlertOpen(true);

    const timer = setTimeout(() => {
      setAlertOpen(false);
      setAlertSeverity('warning');
      setAlertMessage('');
    }, 1500);
  
    return () => clearTimeout(timer); 
  }

  return (
    <BrowserRouter>
      <div className="wifo-site">
        <Navbar/>
        <Routes>
          <Route 
            path='/' 
            element={<HomePage/>}
          />
          <Route 
            path='/videos-a' 
            element={
              <VideoListPage 
                data={wifoIIaData} 
                siteTitle='Wirtschaftsinformatik II a' 
                openAlert={handleOpenAlert}
              />
            }
          />
          <Route 
            path='/videos-b' 
            element={
              <VideoListPage
                data={wifoIIbData} 
                siteTitle='Wirtschaftsinformatik II b' 
                openAlert={handleOpenAlert}
              />
            }
          />
          <Route
            path='*'
            element={<ErrorPage/>}
          />
        </Routes>
        {alertOpen && (
          <div className="wifo-site-alert-container">
            <Alert
              className='wifo-site-alert'
              severity={alertseverity}
            >
              {alertMessage}
            </Alert>
          </div>
        )}
      </div>
    </BrowserRouter>
  )
}

export default App

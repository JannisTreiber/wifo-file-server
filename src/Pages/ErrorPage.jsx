import React from 'react'
import CustomIconButton from '../Components/CustomComponents/CustomIconButton'
import './errorPage.css'

//Icons
import { FaHouse } from "react-icons/fa6";

//React Router Dom
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {

    const navigate = useNavigate();

  return (
    <div className="error-page">
        <h2>
            Error 404
        </h2>
        <p>
            Diese Seite exestiert leider nicht.
            Navigieren Sie zurück zur Startseite
        </p>
        <CustomIconButton
            icon={<FaHouse/>}
            text='Zur Startseite'
            onClick={() => navigate('/')}
        />
    </div>
  )
}

export default ErrorPage
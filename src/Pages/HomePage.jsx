import React from 'react'
import './homePage.css'
import CustomIconButton from '../Components/CustomComponents/CustomIconButton'

//Icons
import { IoVideocam } from "react-icons/io5";

//React Router Dom
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();

    const handleOpenIliasLink = () => {
        let url = 'https://ilias.uni-mannheim.de/goto.php?target=crs_1471100';
        const win = window.open(url, '_blank');

        if(win){
            win.focus();
        }
    }

  return (
    <div className="home-page">
        <p>
            Da zu erwarten ist, dass ILIAS auch weiterhin
            aufgrund der Pandemie intensiv genutzt wird, und es 
            somit möglicherweise zu Downtime und Performance Problemen kommen kann, 
            stellen wir die Videos zur Vorlesung hier online zur Verfügung.
        </p>
        <div className="home-page-buttons-container">
            <CustomIconButton
                text='Wirtschaftsinformatik II a'
                icon={<IoVideocam/>}
                onClick={() => navigate('/videos-a')}
            />
            <CustomIconButton
                text='Wirtschaftsinformatik II b'
                icon={<IoVideocam/>}
                onClick={() => navigate('/videos-b')}
            />
        </div>
        <p>
            Fehlt ein Video, dann bitte im ILIAS Forum einen Beitrag schreiben. 
            Falls das nicht geht, weil ILIAS down ist, dann bitte eine Email an 
            christian@informatik.uni-mannheim.de
        </p>
        <div className="home-page-other-resources-available-on-ilias-container">
            <p>        
                Alle anderen Ressourcen stellen wir wie üblich 
            </p>
            <button 
                className="home-page-other-resources-available-on-ilias-button"
                onClick={() => handleOpenIliasLink()}
            >
                in ILIAS online.
            </button>
        </div>
    </div>
  )
}

export default HomePage
import React, { useState } from 'react'
import './videoPopUp.css'

//Icons
import { FaDownload, FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

const VideoPopUp = (props) => {

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    const handleClickBackButton = () => {
        if((currentVideoIndex-1) >= 0){
            setCurrentVideoIndex(currentVideoIndex-1);
        } else {
            //jump to the last video in the array
            setCurrentVideoIndex(props.videoURLs.length - 1);
        }
    }

    const handleClickNextButton = () => {
        if(currentVideoIndex+1 <= props.videoURLs.length -1){
            setCurrentVideoIndex(currentVideoIndex+1);
        } else {
            //jump back to the first video
            setCurrentVideoIndex(0);
        }
    }

    const handleClickOpenSlides = (filename) => {
        const filePath = `/resources/${filename}`;
        const win = window.open(filePath, '_blank');

        if(win){
            win.focus();
        }
    }

  return (
    <div className="video-pop-up">
        <div className="video-pop-up-video-player-container">
            {props.videoURLs.length > 1 &&  (
                <div className="video-pop-up-video-player-button-container">
                    <button 
                        className='video-pop-up-video-player-button'
                        onClick={() => handleClickBackButton()}
                    >
                        <FaAngleLeft/>
                    </button>
                </div>
            )}
            <iframe 
                className='video-pop-up-video-frame'
                src={props.videoURLs[currentVideoIndex].url}
            />
            {props.videoURLs.length > 1 && (
                <div className="video-pop-up-video-player-button-container">
                    <button 
                        className='video-pop-up-video-player-button'
                        onClick={() => handleClickNextButton()}
                    >
                        <FaAngleRight/>
                    </button>
                </div>
            )}
        </div>
        <button 
            className="video-pop-up-download-lecture-slides-button"
            onClick={() => handleClickOpenSlides(props.videoURLs[currentVideoIndex].slides)}
        >
            <FaExternalLinkAlt/>
            Öffnen
        </button>
    </div>
  )
}

export default VideoPopUp
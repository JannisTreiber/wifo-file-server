import React, { useState } from 'react'
import CustomIconButton from '../Components/CustomComponents/CustomIconButton';
import VideoButton from '../Components/CustomComponents/VideoButton';
import VideoPopUp from '../Components/VideoPopUp/VideoPopUp';
import { Backdrop } from '@mui/material';
import './videoListPage.css'

//Icons
import { IoArrowBackOutline } from "react-icons/io5";

//React Router Dom
import { useNavigate } from 'react-router-dom';

const VideoListPage = (props) => {

    //redux selected videos -> render array based on that.

    const [popUpOpen, setPopUpOpen] = useState(false);
    const [selectedVideoUrls, setSelectedVideoUrls] = useState(props.data[0].videoURLs);
    const [selectedVideoSlides, setSelectedVideoSlides] = useState();

    const navigate = useNavigate();

    const handleOpenVideo = (id) => {
        setPopUpOpen(true);
        const selectedLecture = props.data.filter(lecture => lecture.id === id);
        setSelectedVideoUrls(selectedLecture[0].videoURLs);
    }

    const handleCloePopUp = (e) => {
        if(e.target === e.currentTarget){
            setPopUpOpen(false);
        }
    }

  return (
    <div className="video-list-page">
        <div className="video-list-page-header-container">
            <button 
                className='video-list-page-header-back-button'
                onClick={() => navigate('/')}
            >
                <IoArrowBackOutline/>
            </button>
            <p className="video-list-page-header-text">{props.siteTitle}</p>
        </div>
        <div className="video-list-page-scroll-view">
            <div className="video-list-page-scroll-rect">
                {props.data.map((lecture) => (
                    <div 
                        className="video-list-page-video-button-container"
                        key={lecture.id}
                    >
                        <VideoButton
                            text={lecture.name}
                            onClick={() => handleOpenVideo(lecture.id)}
                        />
                    </div>
                ))}
            </div>
        </div>
        {popUpOpen && (
            <Backdrop open={popUpOpen} onClick={(e) =>  handleCloePopUp(e)}>
                <div className="video-list-page-video-pop-up-container">
                    <VideoPopUp
                        videoURLs={selectedVideoUrls}
                    />
                </div>
            </Backdrop>
        )}
    </div>
  )
}

export default VideoListPage
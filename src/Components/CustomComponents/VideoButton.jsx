import React from 'react'
import './videoButton.css'

//Icons
import { FaPlay } from "react-icons/fa6";

const VideoButton = (props) => {
  return (
    <button 
        className="video-button"
        onClick={props.onClick}
    >
        <FaPlay/>
        {props.text}
    </button>
  )
}

export default VideoButton
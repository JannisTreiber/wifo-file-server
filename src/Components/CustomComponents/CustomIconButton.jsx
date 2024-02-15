import React from 'react'
import './customIconButton.css'

const CustomIconButton = (props) => {

    const iconStyle = { fontSize: props.fontSize? props.fontSize:'1rem' };
    const Icon = props.icon 
    ? React.cloneElement(props.icon, { 
        style: {...iconStyle, ...props.icon.props.style} 
      }) 
    : null;

  return (
    <button 
        className="custom-icon-button"
        onClick={props.onClick}    
    >
        {Icon}
        {props.text}
    </button>
  )
}

export default CustomIconButton
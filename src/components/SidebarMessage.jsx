import React from 'react'
import Avatar from '@mui/material/Avatar';
import ProfileImage from '../assets/images/profile.jpg'
import './SidebarMessage.css'

const SidebarMessage = ({ name, message, unreadMessage }) => {
  const unreadStyle = {
    borderRadius: '16px',
    padding: '2px 7px'
  }

  return (
    <div className="single__sidebar__message">
      {/* Profile Image */}
        <Avatar src={ProfileImage} className="avatar" />

      {/* User Info */}
        <div className='user__info'>
          <h2>{name}</h2>
          <p>{message}</p>
        </div>

      {/* Time */}
      <div className="message__right">
        <p className='time'>9:40am</p>
        <p className="unread__messages" style={unreadMessage.toString().length > 1 ? unreadStyle : {}}>
          {unreadMessage}
        </p>
      </div>
    </div>
  )
}

export default SidebarMessage
import React from 'react'
import './Chat.css'
import ChatBackgroundImage from '../assets/images/chat-bg.png'

const Chat = () => {
  return (
    <div className="chat__container" style={{backgroundImage: `url(${ChatBackgroundImage}), linear-gradient(45deg, #7AAD89,#D4D78D,#7AAD89)`}}>
      {/* Chat header */}
        <div className="chat__header">
          
        </div>
      {/* Chat Middle */}
      {/* Chat footer */}
    </div>
  )
}

export default Chat
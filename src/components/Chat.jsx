import React from 'react'
import './Chat.css'
import ChatBackgroundImage from '../assets/images/chat-bg.png'
import Avatar from '@mui/material/Avatar';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MicOutlinedIcon from '@mui/icons-material/MicOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ChatMessage from './ChatMessage'

const Chat = () => {
  return (
    <div className="chat__container flex" style={{backgroundImage: `url(${ChatBackgroundImage}), linear-gradient(45deg, #7AAD89,#D4D78D,#7AAD89)`}}>
      {/* chat left */}
      <div className='flex-[2] flex flex-col'>
        {/* Chat header */}
        <div className='h-[57px] bg-white w-full flex items-center space-x-5 p-5'>
          <Avatar src={ChatBackgroundImage} />
          <div className="flex-1">
            <h2 className='text-[16px] font-[600]'>Docket</h2>
            <p className="text-[14px] text-[#707579]">last seen May 21 at 15:19</p>
          </div>
          <div className='flex items-center space-x-3'>
            <LocalPhoneOutlinedIcon className="text-[#707579]" />
            <SearchOutlinedIcon className="text-[#707579]" />
            <MoreVertIcon className="text-[#707579]" />
          </div>
        </div>
      {/* Chat Middle */}
        <div className="flex-1 w-full flex flex-col items-center p-2 overflow-y-auto">
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
        </div>
      {/* Chat footer */}
        <div className="w-full pb-5 mt-1">
          <div className="w-[512px] mx-auto flex">
            <div className="h-[55px] bg-white w-[452px] flex items-center p-3 rounded-xl relative before:content-[''] before:absolute before:right-[-9px] before:border-[10px] before:border-[white] before:border-t-[transparent] before:border-r-[transparent] before:border-l-[transparent] before:bottom-0 shadow-2xl">
              <EmojiEmotionsOutlinedIcon className="cursor-pointer text-[#707579]" />
              <input type="text" placeholder='Message' className="flex-1 p-2 outline-none"/>
              <AttachFileIcon className="cursor-pointer text-[#707579] rotate-45" />
            </div>
            <div className="flex justify-center items-center w-[55px] h-[55px] bg-[#3390EC] ml-3 rounded-full shadow-lg cursor-pointer">
              <MicOutlinedIcon className="text-white" />
            </div>
          </div>
        </div>
      </div>
      {/* chat right */}
      <div className="flex-1 bg-white border-l-[1px] border-l-gray-300">
        
      </div>
    </div>
  )
}

export default Chat
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

const Chat = () => {
  return (
    <div className="chat__container flex flex-col" style={{backgroundImage: `url(${ChatBackgroundImage}), linear-gradient(45deg, #7AAD89,#D4D78D,#7AAD89)`}}>
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
        <div className="flex-1 w-full bg-red-700">

        </div>
      {/* Chat footer */}
        <div className="w-full pb-5 pt-2">
          <div className="w-[512px] mx-auto flex">
            <div className="h-[55px] bg-white w-[452px] flex items-center p-3 rounded-xl relative before:content-[''] before:absolute before:right-[-15px] before:h-4 before:w-4 before:bg-red-700">
              <EmojiEmotionsOutlinedIcon />
              <input type="text" placeholder='Message' className="flex-1 p-2 outline-none"/>
              <AttachFileIcon />
            </div>
            <MicOutlinedIcon />
          </div>
        </div>
    </div>
  )
}

export default Chat
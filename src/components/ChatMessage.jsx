import React from 'react'
import Avatar from '@mui/material/Avatar';

const ChatMessage = () => {

  function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    console.log(color)
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <div className="flex mb-2 items-end w-full justify-center">
      <Avatar {...stringAvatar('Ben Charles')} />
      <div className="relative bg-white ml-2 p-2 rounded-xl before:content-[''] before:absolute before:border-[10px] before:border-[transparent] before:border-b-[white] before:border-r-[white] before:bottom-0 before:left-[-6px] before:z-[-4] z-10 max-w-[440px] rounded-bl-none before:rotate-[-6deg]">
        <h3 className='z-10 bg-white'>Ben Charles</h3>
        <div className="hover:bg-[#EFF6FD] p-2 rounded-md cursor-pointer transform transition duration-75">
          <div className="border-l-[2.5px] border-l-[#3390EC] pl-2">
            <h4 className="text-[14px] text-[#3390EC]">Tony</h4>
            <p className="text-[14px] font-[400] text-ellipsis whitespace-nowrap overflow-hidden">
              I know but dis bot said habe added 55 
              be4 how d everything reach 0 again
              I know but dis bot said habe added 55 
              be4 how d everything reach 0 again
              I know but dis bot said habe added 55 
              be4 how d everything reach 0 again
            </p>
          </div>
        </div>
        <div className='z-10 bg-white flex items-end'>
          <p className="font-[400]">
            I know but dis bot said habe added 55 
            be4 how d everything reach 0 again
          </p>
          <p className="text-[12px] text-[#707579]">12:06</p>
        </div>
      </div>
    </div>
  )
}

export default ChatMessage
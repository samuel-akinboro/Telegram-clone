import React from 'react'
import './Sidebar.css'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SidebarMessage from './SidebarMessage';

function Sidebar () {
  return (
    <div className='sidebar__container'>
      {/* Sidebar header */}
        <div className='sidebar__header'>
          <MenuIcon />
          <div className="search__box">
            <SearchIcon />
            <input type="text" placeholder='Search' />
          </div>
        </div>
      {/* Sidebar messages */}
        <div className="sidebar__messages">
          <SidebarMessage 
            name="Ben Ayo" 
            message="What's up bro" 
            unreadMessage={1} 
          />
          <SidebarMessage 
            name="Charles dickson"
            message="How u doing"
            unreadMessage={33}
           />
          <SidebarMessage 
            name="Anita bright"
            message="Google"
            unreadMessage={3000}
          />
          <SidebarMessage 
            name="Ben Ayo" 
            message="What's up bro" 
            unreadMessage={1} 
          />
          <SidebarMessage 
            name="Charles dickson"
            message="How u doing"
            unreadMessage={33}
           />
          <SidebarMessage 
            name="Anita bright"
            message="Google"
            unreadMessage={3000}
          />
          <SidebarMessage 
            name="Ben Ayo" 
            message="What's up bro" 
            unreadMessage={1} 
          />
          <SidebarMessage 
            name="Charles dickson"
            message="How u doing"
            unreadMessage={33}
           />
          <SidebarMessage 
            name="Anita bright"
            message="Google"
            unreadMessage={3000}
          />
          <SidebarMessage 
            name="Ben Ayo" 
            message="What's up bro" 
            unreadMessage={1} 
          />
          <SidebarMessage 
            name="Charles dickson"
            message="How u doing"
            unreadMessage={33}
           />
          <SidebarMessage 
            name="Anita bright"
            message="Google"
            unreadMessage={3000}
          />
        </div>
    </div>
  )
}


export default Sidebar
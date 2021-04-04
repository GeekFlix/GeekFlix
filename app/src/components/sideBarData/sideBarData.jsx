 import React from 'react';
 import * as FaIcons from 'react-icons/fa';
 import * as AiIcons from 'react-icons/ai';
 
 
 
 
 
 
 export const SideBarData = [
   {
     path: '/home-movie',
     icon: <AiIcons.AiFillHome />,
     cName: 'nav-text'
   },
   {
    path: '/user-profile',
    icon: <FaIcons.FaUser />,
    cName: 'nav-text'
   },
   {
     path: '/rental',
     icon: <FaIcons.FaCartPlus />,
     cName: 'nav-text'
   }
   
 ];
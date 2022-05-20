import React from 'react';
import './Layout.scss';
import { Sidebar } from '../Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
    <div className='App'>
      < Sidebar />
      <div className='page'>
        <span className='tags top-tags'>&lt;body&gt;</span>

        < Outlet />

        <span className='tags bottom-tags'>
        &lt;/body&gt;
        <br />
        <span className='bottom-tags-html'>&lt;/html&gt;</span>
        </span>
      </div>
    </div>
    
    </>
  );
}

import { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative flex">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {(isSidebarOpen && (window.innerWidth < 1024)) && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20"
          onClick={toggleSidebar}
        />
      )}

      <div className="flex flex-col flex-grow transition-all duration-300 ml-0 md:ml-20 lg:ml-60">
        <Navbar toggleSidebar={toggleSidebar} />

        <div className="p-6 max-w-[1800px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

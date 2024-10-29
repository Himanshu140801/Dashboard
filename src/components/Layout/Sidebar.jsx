import { FaTachometerAlt, FaUserPlus, FaCalendarAlt, FaUserFriends, FaBuilding, FaHeadset, FaCog } from 'react-icons/fa';
import logo from "../../assets/logo.svg";
import { Link, useLocation } from 'react-router-dom';

const mainMenuItems = [
  { name: "Dashboard", icon: <FaTachometerAlt />, path: "/" },
  { name: "Recruitment", icon: <FaUserPlus />, path: "/recruitment" },
  { name: "Schedule", icon: <FaCalendarAlt />, path: "/schedule" },
  { name: "Employee", icon: <FaUserFriends />, path: "/employee" },
  { name: "Department", icon: <FaBuilding />, path: "/department" }
];

const otherItems = [
  { name: "Support", icon: <FaHeadset />, path: "/support" },
  { name: "Settings", icon: <FaCog />, path: "/settings" }
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation(); // Get the current location

  return (
    <div
      className={`fixed md:${isOpen ? 'absolute' : 'fixed'} top-0 left-0 h-full bg-[#FAFAFA] text-gray-900 p-4 transition-transform transform ${
        isOpen ? 'translate-x-0 w-60' : 'md:w-20 lg:w-60 -translate-x-full md:translate-x-0'
      } z-30`}
    >
      <div className="flex items-center justify-between mb-10">
        <Link to="/" className="flex items-center gap-4">
          <img src={logo} alt="Logo" />
          <span className={`text-[#0A337A] font-bold text-2xl ${isOpen ? 'block' : 'hidden md:hidden lg:block'}`}>
            Vasitum
          </span>
        </Link>
        
        <button
          className={`text-gray-900 focus:outline-none ${isOpen ? 'block' : 'hidden'}`}
          onClick={toggleSidebar}
        >
          ✕
        </button>
      </div>

      <div className="flex flex-col space-y-4">
        <p className="text-gray-500 uppercase text-xs mb-2">Main Menu</p>
        {mainMenuItems.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`flex items-center space-x-3 ${
              location.pathname === item.path ? 'text-red-500 font-semibold' : 'text-gray-400'
            } hover:text-black`}
          >
            <div className="text-lg">{item.icon}</div>
            <span className={`${isOpen ? 'inline' : 'max-lg:hidden'}`}>
              {item.name}
            </span>
          </Link>
        ))}
      </div>

      <div className="flex flex-col mt-10 space-y-4">
        <p className="text-gray-500 uppercase text-xs mb-2">Other</p>
        {otherItems.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`flex items-center space-x-3 ${
              location.pathname === item.path ? 'text-red-500 font-semibold' : 'text-gray-400'
            } hover:text-black`}
          >
            <div className="text-lg">{item.icon}</div>
            <span className={`${isOpen ? 'inline' : 'max-lg:hidden'}`}>
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

import { FaSearch, FaBell, FaComment, FaChevronDown, FaBars } from 'react-icons/fa';
import profile from "../../assets/profile.svg";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="flex items-center justify-between h-16 bg-white px-4 border-b border-[#F1F1F1] shadow-sm">
      <div className='w-1/2 flex'>
      <button
        className="lg:hidden text-gray-900 mr-4 focus:outline-none"
        onClick={toggleSidebar}
      >
        <FaBars className='text-gray-400' size={20} />
      </button>

      <div className="flex items-center bg-gray-100 rounded-lg px-3 py-1 w-full lg:w-1/2">
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-100 focus:outline-none text-gray-500 w-full"
        />
        <FaSearch className="text-gray-400" />
      </div>
      </div>

      <div className="flex items-center space-x-6">
        <div className="relative">
          <FaBell className="text-gray-400 cursor-pointer" size={24} />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </div>

        <FaComment className="text-gray-400 cursor-pointer" size={24} />

        <div className="flex items-center space-x-2 cursor-pointer">
          <img src={profile} alt="Profile" className="w-8 h-8 rounded-full" />
          <span className="hidden lg:block text-[#161E54]font-semibold">Admirra John</span>
          <span className="text-gray-400"><FaChevronDown /></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

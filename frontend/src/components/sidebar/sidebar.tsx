import { useState } from 'react';
import { logo } from '../../assets/image/image';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <>
      <button
        className="md:hidden p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white p-6 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <button
          className="md:hidden mb-6 focus:outline-none"
          onClick={() => setIsOpen(false)}
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex justify-around items-center mb-5 ">
          <img className="w-[3rem] h-[3rem] rounded-full" src={logo} />
          <p>SSLG Moderator</p>
        </div>

        <nav className=" text-sm">
          <Link
            to="/dashboard"
            className={`block py-2 px-3 rounded-md ${
              location.pathname === '/dashboard'
                ? 'bg-blue-600'
                : 'hover:bg-gray-700'
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/dashboard/candidate"
            className={`block py-2 px-3 rounded-md ${
              location.pathname === '/dashboard/candidate'
                ? 'bg-blue-600'
                : 'hover:bg-gray-700'
            }`}
          >
            Candidates
          </Link>
          <Link
            to="/dashboard/position"
            className={`block py-2 px-3 rounded-md ${
              location.pathname === '/dashboard/position'
                ? 'bg-blue-600'
                : 'hover:bg-gray-700'
            }`}
          >
            Position
          </Link>
          <Link
            to="/dashboard/ballot"
            className={`block py-2 px-3 rounded-md ${
              location.pathname === '/dashboard/ballot'
                ? 'bg-blue-600'
                : 'hover:bg-gray-700'
            }`}
          >
            Ballot
          </Link>
          <Link
            to="dashboard/announcements"
            className={`block py-2 px-3 rounded-md ${
              location.pathname === '/dashboard/announcements'
                ? 'bg-blue-600'
                : 'hover:bg-gray-700'
            }`}
          >
            Announcements
          </Link>

          <div className="text-gray-400 text-sm mt-6">Manage Reports</div>

          <Link
            to="dashboard/ballot-report"
            className="block py-2 px-3 hover:bg-gray-700 rounded-md"
          >
            Ballot Report
          </Link>
          <Link
            to="dashboard/feedbacks"
            className="block py-2 px-3 hover:bg-gray-700 rounded-md"
          >
            Feedbacks
          </Link>

          <div className="text-gray-400 text-sm mt-6">Manage Users</div>

          <Link
            to="dashboard/students"
            className="block py-2 px-3 hover:bg-gray-700 rounded-md"
          >
            Students
          </Link>
          <Link
            to="dashboard/staff"
            className="block py-2 px-3 hover:bg-gray-700 rounded-md"
          >
            Staff
          </Link>
          <Link
            to="/accounts"
            className="block py-2 px-3 hover:bg-gray-700 rounded-md"
          >
            Accounts
          </Link>

          <div className="text-gray-400 text-sm mt-6">Manage Account</div>

          <Link
            to="/profile"
            className="block py-2 px-3 hover:bg-gray-700 rounded-md"
          >
            Profile
          </Link>
          <div className="m-7">
            <Link
              to="/logout"
              className="block py-2 px-3 hover:bg-gray-700 rounded-md "
            >
              <p className="text-red-700 font-bold text-xl text-center">
                Logout
              </p>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

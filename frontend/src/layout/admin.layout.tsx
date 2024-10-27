import { FC } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout: FC = () => {
  return (
    <div className="min-h-screen flex">
      <div className="w-64 min-h-screen">
        <Sidebar />
      </div>

      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;

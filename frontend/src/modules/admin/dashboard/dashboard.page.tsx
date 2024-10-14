import { FC } from 'react';
import CustomMonthLayout from '../../../components/calendar';
const DashboardPage: FC = () => {
  return <div>
     <div className="flex justify-between p-2">
      <div className="ml-auto"> 
        <CustomMonthLayout />
      </div>
    </div>
  </div>;
};

export default DashboardPage;

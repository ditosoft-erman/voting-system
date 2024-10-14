import { createBrowserRouter } from "react-router-dom";
import PageLayout from "../layout/page.layout";
import LoginPage from "../modules/authentication/login.page";
import DashboardPage from "../modules/admin/dashboard/dashboard.page";
import AdminLayout from "../layout/admin.layout";
import CandidatePage from "../modules/admin/candidates/candidate.page";
import PositionPage from "../modules/admin/position/position.page";
import ErrorPage from "../modules/error/error.page";
import BallotPage from "../modules/user/ballots/ballots.page";
import DashboardPageStudent from "../modules/user/dashboard/dashboard.page";
export const router = createBrowserRouter([
    {
      path: '',
      Component: PageLayout,
      children: [
        {
          index: true,
          Component: LoginPage
        }
      ]
    },
    {
      path: '/dashboard',
      Component: AdminLayout,
      children: [
        {
          index: true,
          Component: DashboardPage,
         
        },
        {
            path: 'candidate',
            Component: CandidatePage
        },
        {
            path: 'position',
            Component: PositionPage
        }
      ]
    },
    {
      path: '/Student',
      Component:AdminLayout,
      children:[
        {
          index: true,
          Component: BallotPage

      }
    ]
    },
    

    
    {
      path: "*",
      Component:ErrorPage
    }



  ]);
  
  export default router;
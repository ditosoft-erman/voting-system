import { createBrowserRouter } from "react-router-dom";
import PageLayout from "../layout/page.layout";
import LoginPage from "../modules/authentication/login.page";
import DashboardPage from "../modules/admin/dashboard/dashboard.page";
import AdminLayout from "../layout/admin.layout";
import CandidatePage from "../modules/admin/candidates/candidate.page";
import PositionPage from "../modules/admin/position/position.page";

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
          Component: DashboardPage
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
    }
  ])
  
  export default router;
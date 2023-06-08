import { Outlet } from "react-router-dom";
import { SideNavigator } from "../..";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <div>
        <SideNavigator />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default DashboardLayout;

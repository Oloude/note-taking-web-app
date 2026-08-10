import { Outlet } from "react-router";
import BottomNav from "./BottomNav";
import MobileHeader from "./MobileHeader";

function AppLayout() {
  return (
    <div className="h-screen flex flex-col">
      <MobileHeader />
      <main className="overflow-y-auto flex-1 bg-neutral0 dark:bg-neutral950">
        <Outlet />
      </main>

      <BottomNav />
    </div>
  );
}

export default AppLayout;

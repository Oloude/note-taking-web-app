import { Outlet } from "react-router";
import BottomNav from "./BottomNav";
import MobileHeader from "./MobileHeader";
import Sidebar from "./Sidebar";
import DesktopHeader from "./DesktopHeader";
import NoteMenu from "./NoteMenu";

function AppLayout() {
  return (
    <div className={`font-inter`}>
      <div className="h-screen flex flex-col lg:hidden">
        <MobileHeader />
        <main className="overflow-y-auto flex-1 bg-neutral0 dark:bg-neutral950">
          <Outlet />
        </main>

        <BottomNav />
      </div>
      <div className="lg:flex h-screen hidden dark:bg-neutral950">
        <Sidebar />

        <div className="flex-1 flex flex-col h-screen min-h-0">
          <DesktopHeader />

          <div className="flex flex-1 min-h-0">
            <NoteMenu />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;

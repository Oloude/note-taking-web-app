import { CiSearch } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";

function DesktopHeader() {
  return <header className="flex items-center h-20.25 px-8 border-b border-neutral200 dark:border-neutral800 justify-between">
    <h1 className="text-neutral950 text-preset1 dark:text-white">All Notes</h1>
    <div className="flex items-center gap-4">
        <div className="border border-neutral300 dark:border-neutral600 rounded-lg px-4 py-3 shadow-search flex items-center gap-2 w-75 focus-within:border-blue500 transition-all">
            <CiSearch className="w-5 h-5 text-neutral500 dark:text-neutral400" />
            <input type="search" name="" id="" placeholder="Search by title, content, or tags…" className="text-preset5 text-neutral500 dark:text-neutral400 outline-none"/>
        </div>
        <button className="cursor-pointer"><IoSettingsOutline className="w-6 h-6 text-neutral500 dark:text-neutral400 hover:text-neutral950 transition-all" /></button>
    </div>

  </header>;
}

export default DesktopHeader;

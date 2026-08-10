import { IoSearchOutline, IoSettingsOutline } from "react-icons/io5";
import { PiBoxArrowDown } from "react-icons/pi";
import { TbHome, TbTag } from "react-icons/tb";
import { NavLink } from "react-router";

const navLinks = [
  { icon: TbHome, path: "/", title: "Home" },
  { icon: IoSearchOutline, path: "/search", title: "Search" },
  { icon: PiBoxArrowDown, path: "/achieved", title: "Achieved" },
  { icon: TbTag, path: "/tags", title: "Tags" },
  { icon: IoSettingsOutline, path: "/settings", title: "Settings" },
];

function BottomNav() {
  return (
    <nav className="flex items-center justify-between px-4 py-3 border-t border-t-neutral200 dark:border-t-neutral950 dark:bg-neutral900 shadow-top dark:shadow-topD h-14 md:h-18.5 md:px-8 md:py-4">
      {navLinks.map(({ icon: Icon, path, title }) => (
        <NavLink
          key={title}
          to={path}
          className={({ isActive }) =>
            isActive
              ? "bg-blue50 text-blue500 dark:bg-neutral700 py-1 rounded-md w-full max-w-20 flex flex-col items-center gap-1"
              : "text-neutral600 dark:text-neutral400 w-full max-w-20 flex flex-col items-center gap-1"
          }
        >
          <Icon className="w-6 h-6" />
          <span className="hidden md:inline text-preset6">{title}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default BottomNav;

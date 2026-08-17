import { CiLight } from "react-icons/ci";
import useNoteApp from "../AppState";
import { AiOutlineFontSize } from "react-icons/ai";
import { VscLockSmall } from "react-icons/vsc";
import { IoLogOutOutline } from "react-icons/io5";
import {
  MdArrowBackIosNew,
  MdImportantDevices,
  MdOutlineLightMode,
} from "react-icons/md";
import { TbMoon2 } from "react-icons/tb";
import { useEffect, useState } from "react";

const settings = [
  { title: "Color Theme", icon: CiLight },
  { title: "Font Theme", icon: AiOutlineFontSize },
  { title: "Change Password", icon: VscLockSmall },
];

const themes = [
  {
    title: "Light Mode",
    description: "Pick a clean and classic light theme",
    icon: MdOutlineLightMode,
  },
  {
    title: "Dark Mode",
    description: "Select a sleek and modern dark theme",
    icon: TbMoon2,
  },
  {
    title: "System",
    description: "Adapts to your device’s theme",
    icon: MdImportantDevices,
  },
];

function Setting() {
  const selectedSetting = useNoteApp((state) => state.selectedSetting);
  const handleSelectedSetting = useNoteApp(
    (state) => state.handleSelectedSetting,
  );
  const handleThemeChange = useNoteApp((state) => state.handleThemeChange);

  const [theme, setTheme] = useState("Light Mode");

  function handleApplyThemeChange(){
    if (theme === "Light Mode") {
      handleThemeChange("light");
    }
    if (theme === "Dark Mode") {
      handleThemeChange("dark");
    }
    if (theme === "System") {
      const isDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      handleThemeChange(isDarkMode ? "dark" : "light");
    }

  }



  return (
    <section className="py-6 px-4">
      {selectedSetting === null && (
        <div className="flex flex-col gap-4">
          <h1 className="text-preset1 text-neutral950">Settings</h1>
          <div className="flex flex-col gap-4 divide-y divide-neutral200">
            <div className="flex flex-col gap-3">
              {" "}
              {settings.map(({ title, icon: Icon }) => (
                <button
                  onClick={() => handleSelectedSetting(title)}
                  className="flex items-center gap-2 py-2 rounded-lg text-preset4 text-neutral950 cursor-pointer hover:bg-neutral100 transition-all"
                >
                  <Icon className="w-5 h-5 text-neutral950" /> {title}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-2 py-2 rounded-lg text-preset4 text-neutral950 cursor-pointer hover:bg-neutral100 transition-all">
              <IoLogOutOutline className="w-5 h-5" />
              Logout
            </button>
          </div>
        </div>
      )}
      {selectedSetting === "Color Theme" && (
        <div className="flex flex-col gap-5">
          <div className="space-y-3">
            <button className="text-preset4 text-neutral600 cursor-pointer hover:text-neutral700 flex items-center gap-2 ">
              <MdArrowBackIosNew className="w-4 h-4" />
              Settings
            </button>
            <div className="space-y-2">
              <h1 className="text-preset1 text-neutral950">Color Theme</h1>
              <p className="text-preset5 text-neutral700">
                Choose your color theme:
              </p>
            </div>
          </div>
          {themes.map(({ title, description, icon: Icon }) => (
            <label
              key={title}
              className={`p-4 rounded-xl border border-neutral200 flex items-center justify-between gap-3`}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-neutral200 bg-white">
                  <Icon className="w-6 h-6 text-neutral950" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-neutral950 text-preset4">{title}</h3>
                  <p className="text-preset6 text-neutral700">{description}</p>
                </div>
              </div>
              <input
                type="radio"
                name="theme"
                id=""
                value={title}
                onChange={(e) => setTheme(e.target.value)}
              />
            </label>
          ))}
          <button onClick={handleApplyThemeChange} className="py-3 px-4 rounded-lg self-end bg-blue500 text-white cursor-pointer hover:bg-blue700 text-preset4">
            Apply Changes
          </button>
        </div>
      )}
    </section>
  );
}

export default Setting;

import { CiLight } from "react-icons/ci";
import useNoteApp from "../AppState";
import { AiOutlineFontSize } from "react-icons/ai";
import { VscLockSmall } from "react-icons/vsc";
import {
  IoEyeOffOutline,
  IoEyeOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import {
  MdArrowBackIosNew,
  MdImportantDevices,
  MdOutlineInfo,
  MdOutlineLightMode,
} from "react-icons/md";
import { TbMoon2 } from "react-icons/tb";
import { useState } from "react";
import { RiFontMono, RiFontSansSerif, RiFontSerif } from "react-icons/ri";

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

const fonts = [
  {
    title: "Sans-serif",
    description: "Clean and modern, easy to read.",
    icon: RiFontSansSerif,
  },
  {
    title: "Serif",
    description: "Classic and elegant for a timeless feel.",
    icon: RiFontSerif,
  },
  {
    title: "Monospace",
    description: "Code-like, great for a technical vibe.",
    icon: RiFontMono,
  },
];

function Setting() {
  const handleThemeChange = useNoteApp((state) => state.handleThemeChange);
  const handleFontChange = useNoteApp((state) => state.handleFontChange);

  const [selectedSetting, setSelectedSetting] = useState<string | null>(null);
  const [theme, setTheme] = useState("Light Mode");
  const [font, setFont] = useState("Sans-serif");
  const [showPassword, setShowPassword] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  function handleSelectedSetting(value: string | null) {
    setSelectedSetting(value);
  }

  function handleApplyThemeChange() {
    if (theme === "Light Mode") {
      handleThemeChange("light");
    } else if (theme === "Dark Mode") {
      handleThemeChange("dark");
    } else if (theme === "System") {
      const isDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      handleThemeChange(isDarkMode ? "dark" : "light");
    }
  }

  function handleApplyFontChange() {
    handleFontChange(font);
  }

  function handleShowPasswordChange(propTitle: keyof typeof showPassword) {
    setShowPassword((prev) => ({ ...prev, [propTitle]: !prev[propTitle] }));
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
            <button
              onClick={() => handleSelectedSetting(null)}
              className="text-preset4 text-neutral600 cursor-pointer hover:text-neutral700 flex items-center gap-2 "
            >
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
              className={`p-4 rounded-xl border border-neutral200 flex items-center justify-between gap-3 ${theme === title ? "bg-neutral100" : "bg-neutral0"}`}
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
                checked={theme === title}
                onChange={(e) => setTheme(e.target.value)}
              />
            </label>
          ))}
          <button
            onClick={handleApplyThemeChange}
            className="py-3 px-4 rounded-lg self-end bg-blue500 text-white cursor-pointer hover:bg-blue700 text-preset4"
          >
            Apply Changes
          </button>
        </div>
      )}

      {selectedSetting === "Font Theme" && (
        <div className="flex flex-col gap-5">
          <div className="space-y-3">
            <button
              onClick={() => handleSelectedSetting(null)}
              className="text-preset4 text-neutral600 cursor-pointer hover:text-neutral700 flex items-center gap-2 "
            >
              <MdArrowBackIosNew className="w-4 h-4" />
              Settings
            </button>
            <div className="space-y-2">
              <h1 className="text-preset1 text-neutral950">Font Theme</h1>
              <p className="text-preset5 text-neutral700">
                Choose your font theme:
              </p>
            </div>
          </div>
          {fonts.map(({ title, description, icon: Icon }) => (
            <label
              key={title}
              className={`p-4 rounded-xl border border-neutral200 flex items-center justify-between gap-3 ${theme === title ? "bg-neutral100" : "bg-neutral0"}`}
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
                name="fonts"
                id=""
                value={title}
                checked={font === title}
                onChange={(e) => setFont(e.target.value)}
              />
            </label>
          ))}
          <button
            onClick={handleApplyFontChange}
            className="py-3 px-4 rounded-lg self-end bg-blue500 text-white cursor-pointer hover:bg-blue700 text-preset4"
          >
            Apply Changes
          </button>
        </div>
      )}

      {selectedSetting === "Change Password" && (
        <div className="flex flex-col gap-5">
          <div className="space-y-3">
            <button
              onClick={() => handleSelectedSetting(null)}
              className="text-preset4 text-neutral600 cursor-pointer hover:text-neutral700 flex items-center gap-2 "
            >
              <MdArrowBackIosNew className="w-4 h-4" />
              Settings
            </button>
            <h1 className="text-preset1 text-neutral950">Change Password</h1>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="" className="text-preset4 text-neutral950">
                Old Password
              </label>
              <div className="border border-neutral300 px-4 py-3 flex items-center gap-2 rounded-lg focus:border-blue500">
                <input
                  type={`${showPassword.oldPassword ? "text" : "password"}`}
                  name=""
                  id=""
                  className="text-preset6 text-neutral600 outline-none w-full"
                />
                <button
                  onClick={() => handleShowPasswordChange("oldPassword")}
                  className="text-neutral500 hover:text-neutral700 transition-all cursor-pointer shrink-0"
                >
                  {!showPassword.oldPassword ? (
                    <IoEyeOutline className="w-5 h-5" />
                  ) : (
                    <IoEyeOffOutline className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="" className="text-preset4 text-neutral950">
                New Password
              </label>
              <div className="border border-neutral300 px-4 py-3 flex items-center gap-2 rounded-lg focus:border-blue500">
                <input
                  type={`${showPassword.newPassword ? "text" : "password"}`}
                  name=""
                  id=""
                  className="text-preset6 text-neutral600 outline-none w-full"
                />
                <button
                  onClick={() => handleShowPasswordChange("newPassword")}
                  className="text-neutral500 hover:text-neutral700 transition-all cursor-pointer shrink-0"
                >
                  {!showPassword.newPassword ? (
                    <IoEyeOutline className="w-5 h-5" />
                  ) : (
                    <IoEyeOffOutline className="w-5 h-5" />
                  )}
                </button>
              </div>
              <p className="flex items-center gap-2 text-preset6 text-neutral600">
                <MdOutlineInfo className="w-4 h-4" /> At least 8 characters
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="" className="text-preset4 text-neutral950">
                Confirm New Password
              </label>
              <div className="border border-neutral300 px-4 py-3 flex items-center gap-2 rounded-lg focus:border-blue500">
                <input
                  type={`${showPassword.confirmPassword ? "text" : "password"}`}
                  name=""
                  id=""
                  className="text-preset6 text-neutral600 outline-none w-full"
                />
                <button
                  onClick={() => handleShowPasswordChange("confirmPassword")}
                  className="text-neutral500 hover:text-neutral700 transition-all cursor-pointer shrink-0"
                >
                  {!showPassword.confirmPassword ? (
                    <IoEyeOutline className="w-5 h-5" />
                  ) : (
                    <IoEyeOffOutline className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <button className="py-3 px-4 rounded-lg self-end bg-blue500 text-white cursor-pointer hover:bg-blue700 text-preset4">
            Save Password
          </button>
        </div>
      )}
    </section>
  );
}

export default Setting;

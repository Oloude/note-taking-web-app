import { TbHome, TbTag } from "react-icons/tb";
import Logo from "../Logo";
import { PiBoxArrowDown } from "react-icons/pi";
import { MdKeyboardArrowRight } from "react-icons/md";
import useNoteApp from "../../AppState";

function Sidebar() {
  const notes = useNoteApp((state) => state.notes);
  let allTags = notes.flatMap((note) => note.tags);
  let tags = [...new Set(allTags)];

  return (
    <aside className="w-68 shrink-0 flex flex-col gap-5 px-6 py-3 border-r border-neutral200 dark:border-neutral800">
      <Logo />
      <div className="flex flex-col gap-2 border-b border-neutral200 dark:border-neutral800 pb-2">
        <button
          className={`flex items-center justify-between px-3 py-2.5 rounded-lg ${"bg-neutral100 dark:bg-neutral800"}`}
        >
          <div className="flex gap-2 items-center text-preset5 text-neutral700 dark:text-neutral0">
            <TbHome className={`w-5 h-5 `} />
            All Notes
          </div>
          <MdKeyboardArrowRight className="w-4 h-4 text-neutral700 dark:text-neutral0" />
        </button>
        <button
          className={`flex items-center justify-between px-3 py-2.5 rounded-lg `}
        >
          <div className="text-preset5 text-neutral700 dark:text-neutral0 flex gap-2 items-center">
            <PiBoxArrowDown className={`w-5 h-5 `} />
            Archived Notes
          </div>
          <MdKeyboardArrowRight className="w-4 h-4 text-neutral700 dark:text-neutral0" />
        </button>
      </div>
      {notes.length > 0 && (
        <div className="flex flex-col gap-3 overflow-y-auto">
          <h3 className="px-2 text-preset5 text-neutral500">Tags</h3>
          {tags.map((tag) => (
            <button key={tag} className="flex items-center gap-2 px-3 py-2 text-preset5 text-neutral700">
              {" "}
              <TbTag className="w-5 h-5 text-neutral700" />
              {tag}
            </button>
          ))}
        </div>
      )}
    </aside>
  );
}

export default Sidebar;

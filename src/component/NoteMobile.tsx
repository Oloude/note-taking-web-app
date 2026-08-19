import { GoClock } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { PiBoxArrowDown } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbLoader4, TbTag } from "react-icons/tb";
import formatDate from "../utils/formatDate";

type Note = {
  title: string;
  tags: string[];
  content: string;
  lastEdited: string;
  isArchived: boolean;
};
type NoteMobileProps = {
  selectedNote: Note | undefined;
  handleSelectedNote: (value: string | null) => void;
};

function NoteMobile({ selectedNote, handleSelectedNote }: NoteMobileProps) {
  return (
    <div className="flex flex-col gap-3 divide-y divide-neutral200">
      <div className="flex items-center justify-between pb-4">
        <button
          onClick={() => handleSelectedNote(null)}
          className="flex items-center gap-1 text-neutral600 text-preset5 cursor-pointer hover:text-neutral950 transition-all"
        >
          <IoIosArrowBack className="w-4 h-4" /> Go Back
        </button>
        <div className="flex items-center gap-4">
          <button className="text-neutral600 hover:text-neutral800 transition-all cursor-pointer">
            <RiDeleteBinLine className="w-4 h-4 " />
          </button>
          <button className="text-neutral600 hover:text-neutral800 transition-all cursor-pointer">
            <PiBoxArrowDown className="w-4 h-4 " />
          </button>
          <button className="text-neutral600 hover:text-neutral800 transition-all cursor-pointer text-preset5">
            Cancel
          </button>
          <button className="text-blue500 hover:text-blue700 transition-all cursor-pointer text-preset5">
            Save Note
          </button>
        </div>
      </div>
      <h3 className="text-preset1 text-neutral950 pb-4">
        {selectedNote?.title}
      </h3>
      <div className="flex flex-col gap-2 pb-4">
        <div className="flex items-center  gap-10">
          {" "}
          <p className="text-preset6 text-neutral700 flex items-center gap-2">
            <TbTag className="w-4 h-4" /> Tags
          </p>{" "}
          <p className="text-preset6 text-neutral700">
            {selectedNote?.tags.join(", ")}
          </p>
        </div>
        {selectedNote?.isArchived && (
          <div className="flex items-center  gap-10">
            {" "}
            <p className="text-preset6 text-neutral700 flex items-center gap-2">
              <TbLoader4 className="w-4 h-4" /> Status
            </p>{" "}
            <p className="text-preset6 text-neutral700">Archived</p>
          </div>
        )}
        <div className="flex items-center  gap-10">
          {" "}
          <p className="text-preset6 text-neutral700 flex items-center gap-2">
            <GoClock className="w-4 h-4" /> Last edited
          </p>{" "}
          <p className="text-preset6 text-neutral700">
            {formatDate(selectedNote?.lastEdited ?? "")}
          </p>
        </div>
      </div>
      <div className="whitespace-pre-line text-preset5 text-neutral800">
        {selectedNote?.content}
      </div>
      <div className="flex items-center gap-4">
        <button className="text-white bg-blue500 px-4 py-3 rounded-lg hover:bg-blue700 transition-all cursor-pointer text-preset5">
          Save Note
        </button>
        <button className="text-neutral600 bg-neutral100 px-4 py-3 rounded-lg hover:bg-neutral300 transition-all cursor-pointer text-preset5">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default NoteMobile;

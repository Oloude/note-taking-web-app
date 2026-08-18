import { FaArrowRotateLeft } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { PiBoxArrowDown } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbLoader4, TbTag } from "react-icons/tb";

type Note = {
  title: string;
  tags: string[];
  content: string;
  lastEdited: string;
  isArchived: boolean;
};

function NoteDesktop() {
  return (
    <section className="grid grid-cols-3 divide-x divide-neutral200 w-full pr-6">
      <div className="col-span-2 px-6 py-5 flex flex-col gap-4 divide-y divide-neutral200">
        <div className="flex flex-col gap-4">
          <h3 className="text-preset1 text-neutral950 pb-4">
            {/* {selectedNote?.title} */}
          </h3>
          <div className="flex flex-col gap-2 pb-4">
            <div className="flex items-center  gap-10">
              {" "}
              <p className="text-preset6 text-neutral700 flex items-center gap-2">
                <TbTag className="w-4 h-4" /> Tags
              </p>{" "}
              <p className="text-preset6 text-neutral700">
                {/* {selectedNote?.tags.join(", ")} */}
              </p>
            </div>
            {/* {selectedNote?.isArchived && ( */}
            <div className="flex items-center  gap-10">
              {" "}
              <p className="text-preset6 text-neutral700 flex items-center gap-2">
                <TbLoader4 className="w-4 h-4" /> Status
              </p>{" "}
              <p className="text-preset6 text-neutral700">Archived</p>
            </div>

            <div className="flex items-center  gap-10">
              {" "}
              <p className="text-preset6 text-neutral700 flex items-center gap-2">
                <GoClock className="w-4 h-4" /> Last edited
              </p>{" "}
              <p className="text-preset6 text-neutral700">
                {/* {formatDate(selectedNote?.lastEdited ?? "")} */}
              </p>
            </div>
          </div>
        </div>
        <div className="whitespace-pre-line text-preset5 text-neutral800">
          {/* {selectedNote?.content} */}
        </div>
        <div className="flex items-center gap-4 mt-auto">
          <button className="text-white bg-blue500 px-4 py-3 rounded-lg hover:bg-blue700 transition-all cursor-pointer text-preset5">
            Save Note
          </button>
          <button className="text-neutral600 bg-neutral100 px-4 py-3 rounded-lg hover:bg-neutral300 transition-all cursor-pointer text-preset5">
            Cancel
          </button>
        </div>
      </div>

      <div className="py-5 pl-4 flex flex-col gap-3">
        <button className="px-4 py-3 flex items-center gap-2 rounded-lg border border-neutral300 text-preset5 text-neutral950">
          <PiBoxArrowDown className={`w-5 h-5 `} />
          Archive Note
        </button>
        <button className="px-4 py-3 flex items-center gap-2 rounded-lg border border-neutral300 text-preset5 text-neutral950">
          <FaArrowRotateLeft className={`w-5 h-5 `} />
          Restore Note
        </button>
        <button className="px-4 py-3 flex items-center gap-2 rounded-lg border border-neutral300 text-preset5 text-neutral950">
          <RiDeleteBinLine className={`w-5 h-5 `} />
          Delete Note
        </button>
      </div>
    </section>
  );
}

export default NoteDesktop;

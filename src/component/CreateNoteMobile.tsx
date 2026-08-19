import { GoClock } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { TbTag } from "react-icons/tb";

type CreateNoteProps = {
  handleIsCreatingNewNote : ()=> void
}

function CreateNoteMobile({handleIsCreatingNewNote} : CreateNoteProps) {
  return  <div className="flex flex-col gap-3 divide-y divide-neutral200">
              <div className="flex items-center justify-between pb-4">
                <button
                  onClick={handleIsCreatingNewNote}
                  className="flex items-center gap-1 text-neutral600 text-preset5 cursor-pointer hover:text-neutral950 transition-all"
                >
                  <IoIosArrowBack className="w-4 h-4" /> Go Back
                </button>
                <div className="flex items-center gap-4">
                  <button className="text-neutral600 hover:text-neutral800 transition-all cursor-pointer text-preset5">
                    Cancel
                  </button>
                  <button className="text-blue500 hover:text-blue700 transition-all cursor-pointer text-preset5">
                    Save Note
                  </button>
                </div>
              </div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter a title…"
                className="text-neutral950 pb-4 text-preset2 outline-none"
              />
              <div className="flex flex-col gap-2 pb-4">
                <div className="flex items-center  gap-10">
                  {" "}
                  <p className="text-preset6 text-neutral700 flex items-center gap-2">
                    <TbTag className="w-4 h-4" /> Tags
                  </p>{" "}
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Add tags separated by commas (e.g. Work, Planning)"
                    className="text-preset6 text-neutral400 w-full outline-none"
                  />
                </div>
                <div className="flex items-center  gap-10">
                  {" "}
                  <p className="text-preset6 text-neutral700 flex items-center gap-2">
                    <GoClock className="w-4 h-4" /> Last edited
                  </p>{" "}
                  <p className="text-preset6 text-neutral400">Not yet saved</p>
                </div>
              </div>
              <textarea
                name=""
                id=""
                placeholder="Start typing your note here…"
                className="text-preset6 text-neutral700 outline-none"
              ></textarea>
            </div>
            ;
}

export default CreateNoteMobile;

import { GoClock, GoPlus } from "react-icons/go";
import useNoteApp from "../AppState";
import formatDate from "../utils/formatDate";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { PiBoxArrowDown } from "react-icons/pi";
import { TbLoader4, TbTag } from "react-icons/tb";

function Homepage() {
  const notes = useNoteApp((state) => state.notes);
  const handleSelectedNote = useNoteApp((state) => state.handleSelectedNote);
  const selectedNoteTitle = useNoteApp((state) => state.selectedNote);
  const isCreatingNewNote = useNoteApp((state) => state.isCreatingNewNote);
  const handleIsCreatingNewNote = useNoteApp(
    (state) => state.handleIsCreatingNewNote,
  );

  let selectedNote = notes.find((note) => note.title === selectedNoteTitle);

  return (
    <div className="px-4 py-5 flex flex-col gap-4 relative lg:hidden">
      {isCreatingNewNote ? (
        <div className="flex flex-col gap-3 divide-y divide-neutral200">
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
      ) : (
        <div>
          {" "}
          {selectedNoteTitle === null ? (
            <div className="flex flex-col gap-4">
              {" "}
              <h1 className="text-neutral950 text-preset1">All Notes</h1>
              {notes.length === 0 ? (
                <div className="bg-neutral100 border border-neutral200 rounded-lg p-2 text-preset5 text-neutral950">
                  You don’t have any notes yet. Start a new note to capture your
                  thoughts and ideas.
                </div>
              ) : (
                <div className="flex flex-col gap-1 overflow-y-auto divide-y divide-neutral200">
                  {notes.map((note) => (
                    <div
                      onClick={() => handleSelectedNote(note.title)}
                      key={note.title}
                      className="p-2 flex flex-col gap-3 rounded-md hover:bg-neutral100 transition-all"
                    >
                      <h3 className="text-neutral950 text-preset3">
                        {note.title}
                      </h3>
                      <div className="flex items-center gap-1">
                        {note.tags.map((tag) => (
                          <div
                            key={tag}
                            className="text-neitral950 bg-neutral200 rounded px-1.5 py-0.5 text-preset6"
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                      <span className="text-preset6 text-neutral950">
                        {formatDate(note.lastEdited)}
                      </span>
                    </div>
                  ))}
                </div>
              )}
              <button
                onClick={handleIsCreatingNewNote}
                className="w-12 h-12 md:w-16 md:h-16 fixed bg-blue500 cursor-pointer z-4 bottom-16 right-4 rounded-full flex items-center justify-center shadow-btn"
              >
                <GoPlus className="w-5 h-5 text-white" />
              </button>
            </div>
          ) : (
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
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Homepage;

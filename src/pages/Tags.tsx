import { TbTag } from "react-icons/tb";
import useNoteApp from "../AppState";
import { IoIosArrowBack } from "react-icons/io";
import formatDate from "../utils/formatDate";
import { GoClock, GoPlus } from "react-icons/go";
import { PiBoxArrowDown } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";

function Tags() {
  const notes = useNoteApp((state) => state.notes);
  const selectedTag = useNoteApp((state) => state.selectedTag);
  const handleSelectedTag = useNoteApp((state) => state.handleSelectedTag);
  const selectedNoteTitle = useNoteApp((state) => state.selectedNote);
  const handleSelectedNote = useNoteApp((state) => state.handleSelectedNote);
  const handleIsCreatingNewNote = useNoteApp(state => state.handleIsCreatingNewNote)

  const allTags = notes.flatMap((note) => note.tags);
  const tags = [...new Set(allTags)];
  const selectedTagNotes = notes.filter((note) =>
    note.tags.includes(selectedTag || ""),
  );
  const selectedNote = selectedTagNotes.find(
    (note) => note.title === selectedNoteTitle,
  );

  return (
    <section className=" px-4 py-5">
      {selectedTag === null ? (
        <div className="flex flex-col gap-4 relative">
          <h1 className="text-preset1 text-neutral950">Tags</h1>
          <div className="flex flex-col gap-4 divide-y divide-neutral200">
            {tags.map((tag) => (
              <button
                onClick={() => handleSelectedTag(tag)}
                key={tag}
                className="flex items-center gap-2 py-2.5 text-neutral700 text-preset4 hover:bg-neutral100 rounded-lg transition-all"
              >
                {" "}
                <TbTag className="w-4 h-4" /> {tag}
              </button>
            ))}
          </div>
           <button
                          onClick={handleIsCreatingNewNote}
                          className="w-12 h-12 md:w-16 md:h-16 fixed bg-blue500 cursor-pointer z-4 bottom-16 right-4 rounded-full flex items-center justify-center shadow-btn"
                        >
                          <GoPlus className="w-5 h-5 text-white" />
                        </button>
        </div>
      ) : selectedNoteTitle ? (
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
      ) : (
        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleSelectedTag(null)}
            className="flex items-center gap-1 text-neutral600 text-preset5 cursor-pointer hover:text-neutral950 transition-all"
          >
            <IoIosArrowBack className="w-4 h-4" /> Go Back
          </button>
          <h1 className="text-preset1 text-neutral950">
            Notes Tagged: {selectedTag}
          </h1>
          <h2 className="text-neutral700 text-preset5">All notes with the ”{selectedTag}” tag are shown here.</h2>
          <div className="flex flex-col gap-1 overflow-y-auto divide-y divide-neutral200">
            {selectedTagNotes.map((note) => (
              <div
                onClick={() => handleSelectedNote(note.title)}
                key={note.title}
                className="p-2 flex flex-col gap-3 rounded-md"
              >
                <h3 className="text-neutral950 text-preset3">{note.title}</h3>
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
           <button
                onClick={handleIsCreatingNewNote}
                className="w-12 h-12 md:w-16 md:h-16 fixed bg-blue500 cursor-pointer z-4 bottom-16 right-4 rounded-full flex items-center justify-center shadow-btn"
              >
                <GoPlus className="w-5 h-5 text-white" />
              </button>
        </div>
      )}
    </section>
  );
}

export default Tags;

import { TbTag } from "react-icons/tb";
import useNoteApp from "../AppState";
import { IoIosArrowBack } from "react-icons/io";
import formatDate from "../utils/formatDate";
import { GoPlus } from "react-icons/go";
import { useState } from "react";
import NoteMobile from "../component/NoteMobile";

function Tags() {
  const notes = useNoteApp((state) => state.notes);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedNoteTitle, setSelectedNoteTitle] = useState<string | null>(
    null,
  );
  const [isCreatingNewNote, setIsCreatingNewNote] = useState(false);

  function handleSelectedTag(title: string | null) {
    setSelectedTag(title);
  }

  function handleSelectedNote(value: string | null) {
    setSelectedNoteTitle(value);
  }

  function handleIsCreatingNewNote() {
    setIsCreatingNewNote((prev) => !prev);
  }

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
        <NoteMobile
          selectedNote={selectedNote}
          handleSelectedNote={handleSelectedNote}
        />
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
          <h2 className="text-neutral700 text-preset5">
            All notes with the ”{selectedTag}” tag are shown here.
          </h2>
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

import { GoPlus } from "react-icons/go";
import useNoteApp from "../AppState";

import NoteDesktop from "../component/NoteDesktop";
import CreateNoteMobile from "../component/CreateNoteMobile";
import NoteList from "../component/NoteList";
import { useState } from "react";
import NoteMobile from "../component/NoteMobile";

type Note = {
  title: string;
  tags: string[];
  content: string;
  lastEdited: string;
  isArchived: boolean;
};

function Homepage() {
  const notes = useNoteApp((state) => state.notes);
  const [selectedNoteTitle, setSelectedNoteTitle] = useState<string | null>(
    null,
  );
  const [isCreatingNewNote, setIsCreatingNewNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState<Note | undefined>();

  function handleSelectedNote(title: string | null) {
    setSelectedNoteTitle(title);
    setSelectedNote(notes.find((note) => note.title === title));
  }

  function handleIsCreatingNewNote() {
    setIsCreatingNewNote((prev) => !prev);
  }

  return (
    <>
      <div className="px-4 py-5 flex flex-col gap-4 relative lg:hidden">
        {isCreatingNewNote ? (
          <CreateNoteMobile handleIsCreatingNewNote={handleIsCreatingNewNote} />
        ) : (
          <div>
            {" "}
            {selectedNoteTitle === null ? (
              <div className="flex flex-col gap-4">
                {" "}
                <h1 className="text-neutral950 text-preset1">All Notes</h1>
                {notes.length === 0 ? (
                  <div className="bg-neutral100 border border-neutral200 rounded-lg p-2 text-preset5 text-neutral950">
                    You don’t have any notes yet. Start a new note to capture
                    your thoughts and ideas.
                  </div>
                ) : (
                  <div className="flex flex-col gap-1 overflow-y-auto divide-y divide-neutral200">
                    {notes.map((note) => (
                      <NoteList
                        handleSelectedNote={handleSelectedNote}
                        note={note}
                      />
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
              <NoteMobile
                selectedNote={selectedNote}
                handleSelectedNote={handleSelectedNote}
              />
            )}
          </div>
        )}
      </div>
      <NoteDesktop />
    </>
  );
}

export default Homepage;

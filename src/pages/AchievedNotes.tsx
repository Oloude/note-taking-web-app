import {  GoPlus } from "react-icons/go";
import useNoteApp from "../AppState";
import { useState } from "react";
import CreateNoteMobile from "../component/CreateNoteMobile";
import NoteList from "../component/NoteList";
import NoteMobile from "../component/NoteMobile";

type Note = {
  title: string;
  tags: string[];
  content: string;
  lastEdited: string;
  isArchived: boolean;
};

function AchievedNotes() {
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

  let achievedNotes = notes.filter((note) => note.isArchived);

  return (
    <div className="px-4 py-5 flex flex-col gap-4 relative lg:hidden">
      {isCreatingNewNote ? (
        <CreateNoteMobile handleIsCreatingNewNote={handleIsCreatingNewNote} />
      ) : (
        <div>
          {" "}
          {selectedNoteTitle === null ? (
            <div className="flex flex-col gap-4">
              {" "}
              <h1 className="text-neutral950 text-preset1">Archived Notes</h1>
              {achievedNotes.length === 0 ? (
                <div className="flex flex-col gap-4">
                  <p className="text-preset5 text-neutral700">
                    All your archived notes are stored here. You can restore or
                    delete them anytime.
                  </p>
                  <div className="bg-neutral100 border border-neutral200 rounded-lg p-2 text-preset5 text-neutral950">
                    No notes have been archived yet. Move notes here for
                    safekeeping, or <span>create a new note.</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4 overflow-y-auto divide-y divide-neutral200">
                  {achievedNotes.map((note) => (
                    <NoteList
                      note={note}
                      handleSelectedNote={handleSelectedNote}
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
  );
}

export default AchievedNotes;

import { GoPlus } from "react-icons/go";
import useNoteApp from "../AppState";

function Homepage() {
  const notes = useNoteApp((state) => state.notes);
  return (
    <div className="px-4 py-5 flex flex-col gap-4 relative">
      <h1 className="text-neutral950 text-preset1">All Notes</h1>
      {notes.length === 0 ? (
        <div className="bg-neutral100 border border-neutral200 rounded-lg p-2 text-preset5 text-neutral950">
          You don’t have any notes yet. Start a new note to capture your
          thoughts and ideas.
        </div>
      ) : (
        <div className="flex flex-col gap-4 overflow-y-auto">
          {notes.map((note) => (
            <div key={note.title}>
              <h3>{note.title}</h3>
              <div className="flex items-center gap-2">
                {note.tags.map((tag) => (
                  <div key={tag}>{tag}</div>
                ))}
              </div>
              <span>{note.lastEdited}</span>
            </div>
          ))}
        </div>
      )}
      <button className="w-16 h-16 fixed bg-blue500 z-4 bottom-16 right-4 rounded-full flex items-center justify-center shadow-btn"><GoPlus className="w-5 h-5 text-white" /></button>
    </div>
  );
}

export default Homepage;

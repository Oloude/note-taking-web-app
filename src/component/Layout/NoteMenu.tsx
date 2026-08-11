import useNoteApp from "../../AppState";

function NoteMenu() {
    const notes = useNoteApp(state => state.notes)
  return <div className="w-72.5 shrink-0 pl-8 pr-4 py-5 border-r border-neutral200 dark:border-neutral800 h-full">
    <div className="flex flex-col gap-5 h-full min-h-0">
        <button className="bg-blue500 rounded-lg px-4 py-3 flex items-center gap-2 justify-center text-preset5 text-white">
          + Create New Note
        </button>
        {notes.length === 0 ? <div className="bg-neutral100 border border-neutral200 rounded-lg p-2 text-preset5 text-neutral950">You don’t have any notes yet. Start a new note to capture your thoughts and ideas.</div>
        : <div className="flex flex-col gap-4 overflow-y-auto">
            {
                notes.map(note => <div key={note.title}>
                    <h3>{note.title}</h3>
                    <div className="flex items-center gap-2">
                        {
                            note.tags.map(tag => <div key={tag}>{tag}</div>)
                        }
                    </div>
                    <span>{note.lastEdited}</span>
                </div>)
            }
            </div>}
    </div>
  </div>;
}

export default NoteMenu;

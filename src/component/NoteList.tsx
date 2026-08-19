import formatDate from "../utils/formatDate";

type Note = {
  note: {
    title: string;
    tags: string[];
    content: string;
    lastEdited: string;
    isArchived: boolean;
  };
  handleSelectedNote: (title: string) => void;
};

function NoteList({ note, handleSelectedNote }: Note) {
  return (
    <div
      onClick={() => handleSelectedNote(note.title)}
      key={note.title}
      className="p-2 flex flex-col gap-3 rounded-md hover:bg-neutral100 transition-all"
    >
      <h3 className="text-neutral950 text-preset3">{note.title}</h3>
      <div className="flex items-center gap-1">
        {note.tags.map((tag: string) => (
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
  );
}

export default NoteList;

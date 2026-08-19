import { CiSearch } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import useNoteApp from "../AppState";
import { useState } from "react";
import NoteMobile from "../component/NoteMobile";
import NoteList from "../component/NoteList";

type Note = {
  title: string;
  tags: string[];
  content: string;
  lastEdited: string;
  isArchived: boolean;
};

function Search() {
  const notes = useNoteApp((state) => state.notes);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNotes, setSelectedNotes] = useState<Note[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const [selectedNote, setSelectedNote] = useState<Note | undefined> ()

  function handleSearch() {
    // if (!searchQuery.trim()) {
    //   return;
    // }
    // selectedNotes = notes.filter((note) => {
    //   let trimedQuery = searchQuery.trim();
    //   let titleMatched = note.title.toLowerCase().includes(trimedQuery.toLowerCase())
    //   let tagMatched = note.tags.includes(capitalize(trimedQuery))
    //   let contentMatched = note.content.toLowerCase().includes(trimedQuery.toLowerCase())

    //   return titleMatched || tagMatched || contentMatched;
    // });
    // console.log(selectedNotes)

    const trimmedQuery = searchQuery.trim().toLowerCase();
    setIsSearching(true);

    if (!trimmedQuery) {
      setSelectedNotes([]);
      setIsSearching(false);
      return;
    }

    let filteredNotes = notes.filter((note) => {
      const titleMatch = note.title.toLowerCase().includes(trimmedQuery);

      const contentMatch = note.content.toLowerCase().includes(trimmedQuery);

      const tagsMatch = note.tags.some((tag) =>
        tag.toLowerCase().includes(trimmedQuery),
      );

      return titleMatch || contentMatch || tagsMatch;
    });
    setSelectedNotes(filteredNotes);
  }

  function handleSearchChange(query: string) {
    if (!query.trim()) {
      setIsSearching(false);
    }
    setSearchQuery(query);
  }

  function handleSelectedTitleChange(title: string) {
    setSelectedTitle(title);
    setSelectedNote( notes.find((note) => note.title === title));
  }

  function handleSelectedNote(value : string | null){
    setSelectedTitle(value)
  }
  return (
    <section className="px-4 py-5">
      {selectedTitle === null ? (
        <div className="flex flex-col gap-4 relative">
          <h1 className="text-preset1 text-neutral950">Search</h1>
          <div className="border border-neutral300 bg-neutral50 rounded-lg p-4 flex items-center gap-2 shadow-search">
            <button
              onClick={handleSearch}
              className="cursor-pointer hover:text-neutral800 transition-all"
            >
              <CiSearch className="w-5 h-5 text-neutral500" />
            </button>
            <input
              type="search"
              name=""
              id=""
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="outline-none text-preset5 text-neutral950"
            />
          </div>

          {isSearching && (
            <div>
              <p className="text-preset5 text-neutral700">
                All notes matching ”{searchQuery}” are displayed below.
              </p>
              {selectedNotes.length === 0 ? (
                <div className="border border-neutral200 bg-neutral50 rounded-lg p-4 text-preset5 text-neutral950">
                  No notes match your search. Try a different keyword or{" "}
                  <button className="underline">create a new note</button>.
                </div>
              ) : (
                <div className="flex flex-col gap-1 overflow-y-auto divide-y divide-neutral200">
                  {selectedNotes.map((note) => (
                    <NoteList note={note} handleSelectedNote={handleSelectedNote}/>
                  ))}
                </div>
              )}{" "}
            </div>
          )}

          <button
            // onClick={handleIsCreatingNewNote}
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
    </section>
  );
}

export default Search;

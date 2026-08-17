import { CiSearch } from "react-icons/ci";
import { GoClock, GoPlus } from "react-icons/go";
import useNoteApp from "../AppState";
import { useEffect, useState } from "react";
import formatDate from "../utils/formatDate";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { PiBoxArrowDown } from "react-icons/pi";
import { TbLoader4, TbTag } from "react-icons/tb";

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
                    <div
                      key={note.title}
                      onClick={() => handleSelectedTitleChange(note.title)}
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
        <div className="flex flex-col gap-3 divide-y divide-neutral200">
          <div className="flex items-center justify-between pb-4">
            <button
              onClick={() => setSelectedTitle(null)}
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
    </section>
  );
}

export default Search;

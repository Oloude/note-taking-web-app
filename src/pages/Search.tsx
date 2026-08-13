import { CiSearch } from "react-icons/ci"
import { GoPlus } from "react-icons/go"


function Search() {
  return (
    <section className="px-4 py-5">
        <div className="flex flex-col gap-4 relative">
            <h1 className="text-preset1 text-neutral950">Search</h1>
            <div className="border border-neutral300 bg-neutral50 rounded-lg p-4 flex items-center gap-2 shadow-search">
                <button><CiSearch className="w-5 h-5 text-neutral500" /></button>
                <input type="search" name="" id="" className="outline-none text-preset5 text-neutral950"/>
            </div>
            <p className="text-preset5 text-neutral700">All notes matching ”Bananas” are displayed below.</p>
            <div className="border border-neutral200 bg-neutral50 rounded-lg p-4 text-preset5 text-neutral950">
                No notes match your search. Try a different keyword or <button className="underline">create a new note</button>.
            </div>
            <button
                            // onClick={handleIsCreatingNewNote}
                            className="w-12 h-12 md:w-16 md:h-16 fixed bg-blue500 cursor-pointer z-4 bottom-16 right-4 rounded-full flex items-center justify-center shadow-btn"
                          >
                            <GoPlus className="w-5 h-5 text-white" />
                          </button>
        </div>
    </section>
  )
}

export default Search
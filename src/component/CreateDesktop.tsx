import { GoClock } from "react-icons/go";
import { TbTag } from "react-icons/tb";

function CreateDesktop() {
  return (
    <div className=" grid-cols-3 divide-x divide-neutral200 w-full">
      <div className="flex flex-col col-span-2 px-6 py-5 gap-5 divide-y divide-neutral200">
        <div className="flex flex-col gap-3">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter a title…"
            className="text-neutral950 pb-4 text-preset2 outline-none"
          />
          <div className="flex flex-col gap-2 pb-4">
            <div className="flex items-center  gap-10">
              {" "}
              <p className="text-preset6 text-neutral700 flex items-center gap-2">
                <TbTag className="w-4 h-4" /> Tags
              </p>{" "}
              <input
                type="text"
                name=""
                id=""
                placeholder="Add tags separated by commas (e.g. Work, Planning)"
                className="text-preset6 text-neutral400 w-full outline-none focus:shadow-input rounded-sm focus:text-neutral950"
              />
            </div>
            <div className="flex items-center  gap-10">
              {" "}
              <p className="text-preset6 text-neutral700 flex items-center gap-2">
                <GoClock className="w-4 h-4" /> Last edited
              </p>{" "}
              <p className="text-preset6 text-neutral400">Not yet saved</p>
            </div>
          </div>
        </div>
        <textarea
          name=""
          id=""
          placeholder="Start typing your note here…"
          className="text-preset6 text-neutral700 outline-none flex-1 resize-none"
        ></textarea>

        <div className="flex items-center gap-4">
          <button className="text-white bg-blue500 px-4 py-3 rounded-lg hover:bg-blue700 transition-all cursor-pointer text-preset5">
            Save Note
          </button>
          <button className="text-neutral600 bg-neutral100 px-4 py-3 rounded-lg hover:bg-neutral300 transition-all cursor-pointer text-preset5">
            Cancel
          </button>
        </div>
      </div>
      <div className="col-span-1"></div>
    </div>
  );
}

export default CreateDesktop;

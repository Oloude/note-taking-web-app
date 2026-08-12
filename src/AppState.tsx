import { create } from "zustand";
import data from "../src/data.json";

type Note = {
  title: string;
  tags: string[];
  content: string;
  lastEdited: string;
  isArchived: boolean;
};

type UseNoteApp = {
  theme: string;
  notes: Note[];
  selectedNote : string | null;
  isCreatingNewNote : boolean;
  handleThemeChange: (theme: string) => void;
  handleSelectedNote : (title :string | null) => void;
  handleIsCreatingNewNote : () => void;
};

const useNoteApp = create<UseNoteApp>((set) => ({
  theme: "light",
  notes: data.notes,
  selectedNote : null,
  isCreatingNewNote : false,
  handleThemeChange: (theme) => set({ theme: theme }),
  handleSelectedNote :(title ) => set({ selectedNote : title}),
  handleIsCreatingNewNote : () => set(state => ({isCreatingNewNote : !state.isCreatingNewNote}))
}));

export default useNoteApp;

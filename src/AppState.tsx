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
  selectedTag : string | null;
  selectedSetting : string | null;
  handleThemeChange: (theme: string) => void;
  handleSelectedNote : (title :string | null) => void;
  handleIsCreatingNewNote : () => void;
  handleSelectedTag : (title :string | null) => void;
  handleSelectedSetting : (value : string | null) => void;
};

const useNoteApp = create<UseNoteApp>((set) => ({
  theme: "light",
  notes: data.notes,
  selectedNote : null,
  isCreatingNewNote : false,
  selectedTag : null,
  selectedSetting : null,
  handleThemeChange: (theme) => set({ theme: theme }),
  handleSelectedNote :(title ) => set({ selectedNote : title}),
  handleIsCreatingNewNote : () => set(state => ({isCreatingNewNote : !state.isCreatingNewNote})),
  handleSelectedTag :(tag ) => set({ selectedTag : tag}),
  handleSelectedSetting : (value)  => set({selectedSetting : value})
}));

export default useNoteApp;

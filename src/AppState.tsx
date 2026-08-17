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
  selectedNote: string | null;
  isCreatingNewNote: boolean;
  selectedTag: string | null;
  selectedFont: string;
  handleThemeChange: (theme: string) => void;
  handleSelectedNote: (title: string | null) => void;
  handleIsCreatingNewNote: () => void;
  handleSelectedTag: (title: string | null) => void;
  handleFontChange: (font: string) => void;
};

const useNoteApp = create<UseNoteApp>((set) => ({
  theme: "light",
  notes: data.notes,
  selectedNote: null,
  isCreatingNewNote: false,
  selectedTag: null,
  selectedFont: "Sans-serif",
  handleThemeChange: (theme) => set({ theme: theme }),
  handleSelectedNote: (title) => set({ selectedNote: title }),
  handleIsCreatingNewNote: () =>
    set((state) => ({ isCreatingNewNote: !state.isCreatingNewNote })),
  handleSelectedTag: (tag) => set({ selectedTag: tag }),
  handleFontChange: (font) => set({ selectedFont: font }),
}));

export default useNoteApp;

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
  selectedFont: string;
  handleThemeChange: (theme: string) => void;
  handleFontChange: (font: string) => void;
};

const useNoteApp = create<UseNoteApp>((set) => ({
  theme: "light",
  notes: data.notes,
  selectedFont: "Sans-serif",
  handleThemeChange: (theme) => set({ theme: theme }),
  handleFontChange: (font) => set({ selectedFont: font }),
}));

export default useNoteApp;

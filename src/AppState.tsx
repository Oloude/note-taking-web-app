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
  handleThemeChange: (theme: string) => void;
};

const useNoteApp = create<UseNoteApp>((set) => ({
  theme: "light",
  notes: data.notes,
  handleThemeChange: (theme) => set({ theme: theme }),
}));

export default useNoteApp;

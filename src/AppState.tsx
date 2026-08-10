import { create } from "zustand";

type UseNoteApp = {
  theme: string;
  handleThemeChange: (theme: string) => void;
};

const useNoteApp = create<UseNoteApp>((set) => ({
  theme: "light",
  handleThemeChange: (theme) => set({ theme: theme }),
}));

export default useNoteApp;

import { useEffect } from "react";
import useNoteApp from "./AppState";

function App() {
  const theme = useNoteApp((state) => state.theme);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme === "dark" ? "dark" : "light",
    );
  }, [theme]);

  return <div>App</div>;
}

export default App;

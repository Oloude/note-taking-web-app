import { Link } from "react-router";
import useNoteApp from "../../AppState";

function MobileHeader() {
  const theme = useNoteApp((state) => state.theme);
  return (
    <header className="h-13.5 px-4 py-3 flex items-center bg-neutral100 dark:bg-neutral800 md:h-18.5 md:px-8 md:py-4">
      <Link to="/">
        <img src={theme === "light" ? "/logo.svg" : "/logo-dark.png"} alt="" />
      </Link>
    </header>
  );
}

export default MobileHeader;

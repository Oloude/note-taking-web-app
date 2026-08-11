import { Link } from "react-router";
import useNoteApp from "../AppState";

function Logo() {
  const theme = useNoteApp((state) => state.theme);
  return (
    <Link to="/">
      <img src={theme === "light" ? "/logo.svg" : "/logo-dark.png"} alt="" className="lg:h-7"/>
    </Link>
  );
}

export default Logo;

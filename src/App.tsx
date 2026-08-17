import { useEffect } from "react";
import useNoteApp from "./AppState";
import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./component/Layout/AppLayout";
import Homepage from "./pages/Homepage";
import AchievedNotes from "./pages/AchievedNotes";
import Tags from "./pages/Tags";
import Search from "./pages/Search";
import Setting from "./pages/Setting";

function App() {
  const theme = useNoteApp((state) => state.theme);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme === "dark" ? "dark" : "light",
    );
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/achieved' element={<AchievedNotes/>}/>
          <Route path='/tags' element={<Tags/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/settings' element={<Setting/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";

import AllMeetups from "./pages/meetup/AllMeetups";
import NewMeetup from "./pages/meetup/NewMeetup";
import Favorites from "./pages/meetup/Favorites";
import Todo from "./pages/todo/Todo";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<AllMeetups />} />
        <Route path="/new-meetup" element={<NewMeetup />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;

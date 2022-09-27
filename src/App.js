import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";

import AllMeetups from "./pages/meetup/AllMeetups";
import NewMeetup from "./pages/meetup/NewMeetup";
import Favorites from "./pages/meetup/Favorites";
import Todo from "./pages/todo/Todo";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetups />} />
        <Route path="/new-meetup" element={<NewMeetup />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Layout>
  );
}

export default App;

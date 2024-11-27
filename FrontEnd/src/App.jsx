import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
// import { GroupProvider } from "./GroupProvider";
import HomePage from "./HomePage";
import GroupId from "./GroupId";

function App() {
  return (
    // <GroupProvider>
    <BrowserRouter>
      <Routes className="bg-blue-50 min-h-screen text-blue-950 flex flex-col items-center w-full">
        <Route path="/" element={<HomePage />} />
        <Route path="/Groups/:id" element={<GroupId />} />
      </Routes>
    </BrowserRouter>
    // </GroupProvider>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import List from "./components/List";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/properties" element={<List />} />
      </Routes>
    </>
  );
}

export default App;

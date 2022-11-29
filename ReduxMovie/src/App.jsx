import "./App.css";
import MainPage from "./pages/MainPage";
import ListPage from "./pages/ListPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" index element={<MainPage />} />
          <Route path="/list" element={<ListPage />} />
        </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Favourite from "./pages/Favorites";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe-item/:id" element={<Details />} />
        <Route path="/Favorites" element={<Favourite />} />
      </Routes>
    </>
  );
}

export default App;

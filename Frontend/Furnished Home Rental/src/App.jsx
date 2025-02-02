import { Routes, Route } from "react-router-dom";
import Home from "./User/MainPages/Home";
import Contactus from "./User/Components/Contactus";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<Contactus />} />

      </Routes>
    </>
  );
}

export default App;
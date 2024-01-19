import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Contains/Home";
import NavBarsC from "../Components/NavBarsC";
import MemorizaUseMemo from "../Contains/MemorizaUseMemo";
import CallbackHooks from "../Contains/CallbackHooks";


function App() {
  return (
    <BrowserRouter>
      <NavBarsC />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hooks" element={<MemorizaUseMemo />} />
        <Route path="/calls" element={<CallbackHooks />} />
        {/* <Route path="*" element={<Nav/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RefineResumePage from "./components/upload.jsx";
import GenResumeLanding from "./components/landing.jsx";
import RefineSuggestionsPage from "./components/refine.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GenResumeLanding />} />
        <Route path="/upload" element={<RefineResumePage />} />
        <Route path="/refine" element={<RefineSuggestionsPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;

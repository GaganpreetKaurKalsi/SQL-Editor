import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SQLEditor from "./pages/SQLEditor";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sql-editor" element={<SQLEditor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Pages */
import Home from './pages/Home.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Route */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
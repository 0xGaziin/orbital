import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Pages */
import Home from './pages/Home.jsx';

function App() {
  return (
    <BroserRouter>
      <Routes>
        {/* Main Route */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BroserRouter>
  );
}

export default App;
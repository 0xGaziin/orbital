import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Pages */
import Home from './pages/Home/Home.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Route */}
        <Route path="/" element={<Home />} />

        {/* Login and Sign Routes*/}
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
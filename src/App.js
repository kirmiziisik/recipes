import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import SingleMeal from "./pages/SingleMeal";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="meal/:id" element={<SingleMeal />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeComponent from "./components/HomeComponent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeComponent />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

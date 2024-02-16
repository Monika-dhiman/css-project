import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashboardPage from "./pages/DashboardPage";
import LogIn from "./pages/LoginPage/LogIn";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/" element={<LogIn />} />
      </Routes>
      
    </div>
  );
}

export default App;

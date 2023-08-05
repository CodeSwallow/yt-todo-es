import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import AccountPage from "./pages/AccountPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [darkMode, setDarkMode] = useState("dark");

  function toggleDarkMode() {
    if (darkMode === "dark") {
      setDarkMode("light");
      console.log(darkMode);
    } else {
      setDarkMode("dark");
      console.log(darkMode);
    }
  }

  return (
    <div
      className={`${
        darkMode === "dark" ? "dark" : "light"
      } min-h-screen flex flex-col`}
    >
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

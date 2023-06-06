import { useState } from "react";
import LandingPage from "./pages/LandingPage";

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
      <LandingPage />
    </div>
  );
}

export default App;

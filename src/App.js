import { useState } from "react";

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
        darkMode === "dark" ? "dark" : ""
      } min-h-screen flex flex-col`}
    >
      <div className="bg-zinc-100 dark:bg-gray-900 flex-auto text-gray-900 dark:text-white">
        <h1 className="font-extrabold">React App</h1>
        <button onClick={toggleDarkMode}>
          <span>Toggle Dark Mode</span>
        </button>
      </div>
    </div>
  );
}

export default App;

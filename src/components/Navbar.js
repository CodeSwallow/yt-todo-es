import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="px-2 sm:px-4 py-2.5">
      <div className="flex items-center justify-between mx-auto px-8 sm:px-24">
        <Link
          to="/"
          className="transition hover:scale-110 ease-in duration-100 flex items-center text-xl font-semibold  dark:text-white"
        >
          <span className="text-xl font-semibold  dark:text-white">
            <span>Activity </span>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Manager
            </span>
          </span>
        </Link>
        <div>
          <ul className="flex p-4 space-x-4 md:space-x-8 text-lg items-center">
            <li className="transition hover:scale-110 ease-in duration-100">
              <button onClick={() => console.log("clicked")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 hover:text-pink-500 dark:text-gray-400 dark:hover:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              </button>
            </li>
            <li className="transition hover:scale-110 ease-in duration-100">
              <Link to="/">Home</Link>
            </li>
            <li className="transition hover:scale-110 ease-in duration-100">
              <Link to="/about">Sobre</Link>
            </li>
            <li className="transition hover:scale-110 ease-in duration-100">
              <Link to="/account">Cuenta</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

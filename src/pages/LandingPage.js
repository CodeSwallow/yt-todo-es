import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="bg-zinc-100 dark:bg-gray-900 flex-auto text-gray-900 dark:text-white flex flex-col">
      <Navbar />
      <section className="text-center my-16 mx-8 flex-auto">
        <h1 className="font-extrabold text-5xl mb-16">
          Planeador de Actividades
        </h1>
        <Link
          className="py-2 px-4 rounded-lg bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600"
          to="/account"
        >
          Iniciar sesión
        </Link>
        <p className="text-lg my-8">
          Crea, edita, y ve tus actividades de manera sencilla.
        </p>

        <Link
          className="py-2 px-4 rounded-lg bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600"
          to="/about"
        >
          Conoce mas
        </Link>
      </section>
      <Footer />
    </div>
  );
}

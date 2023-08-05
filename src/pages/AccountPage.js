import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AccountPage() {
  return (
    <div className="bg-zinc-100 dark:bg-gray-900 flex-auto text-gray-900 dark:text-white flex flex-col">
      <Navbar />
      <section className="text-center my-16 mx-8 flex-auto">
        <h1 className="font-extrabold text-5xl mb-16">Cuenta</h1>
      </section>
      <Footer />
    </div>
  );
}

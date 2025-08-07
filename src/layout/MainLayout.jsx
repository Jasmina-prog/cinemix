// src/layouts/MainLayout.jsx
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className=" mx-auto ">
        {children}
      </main>
      <Footer/>
    </>
  );
}

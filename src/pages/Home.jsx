import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="home-page">
      <Navbar />

      <main>
        <Hero />
      </main>

      <Footer />
    </div>
  );
}

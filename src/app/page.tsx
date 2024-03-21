import Banner from "@/components/banner";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Profile from "@/components/profile";
import Profile2 from "@/components/profile2";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className=" scroll-smooth bg-gray-200 flex min-h-screen w-screen flex-col items-center justify-between">
      {/* navbar responsive */}
      <Navbar />
      {/* banner responsive */}
      <Banner />
      {/* deskripsi pt responsive */}
      <Profile />
      {/* profile 2 responsive */}
      <Profile2 />
      {/* projects responsive */}
      <Projects />
      {/* contact responsive */}
      <Contact />
      {/* footer responsive */}
      <Footer />
    </main>
  );
}

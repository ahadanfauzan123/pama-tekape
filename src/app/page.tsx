import Banner from "@/components/banner";
import Navbar from "@/components/navbar";
import Profile from "@/components/profile";
import Profile2 from "@/components/profile2";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className=" scroll-smooth bg-gray-200 flex min-h-screen w-screen flex-col items-center justify-between">
      {/* navbar */}
      <Navbar />
      {/* banner */}
      <Banner />
      {/* deskripsi pt */}
      <Profile />
      {/* profile 2 */}
      <Profile2 />
      {/* projects */}
      <Projects />
      {/* contact */}
      {/* footer */}
    </main>
  );
}

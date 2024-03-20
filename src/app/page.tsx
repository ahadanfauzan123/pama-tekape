import Banner from "@/components/banner";
import Navbar from "../components/navbar";
import Image from "next/image";
import Profile from "@/components/profile";

export default function Home() {
  return (
    <main className="bg-gray-200 flex min-h-screen w-screen flex-col items-center justify-between">
      {/* navbar */}
      <Navbar />
      {/* banner */}
      <Banner />
      {/* deskripsi pt */}
      <Profile />
      {/* artikel */}
      {/* contact */}
      {/* footer */}
    </main>
  );
}

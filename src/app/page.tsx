import Banner from "@/components/banner";
import Navbar from "../components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-200 flex min-h-screen w-screen flex-col items-center justify-between">
      {/* navbar */}
      <Navbar />
      {/* banner */}
      <Banner />
      {/* deskripsi pt */}
      <div className="w-screen h-screen">

      </div>
      {/* artikel */}
      {/* contact */}
      {/* footer */}
    </main>
  );
}

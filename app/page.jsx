import Image from "next/image";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#222222] container mx-auto px-12 py-4">
      <Navbar />
    </main>
  );
}

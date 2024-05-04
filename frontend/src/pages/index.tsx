import Image from "next/image";
import { IBM_Plex_Sans } from "next/font/google";
import Link from "next/link";

const inter = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center gap-12 p-24 ${inter.className}`}
    >
      <h1 className="text-4xl tracking-widest">PORTAL</h1>
      <div className="flex flex-row items-center justify-center gap-6">
        <Link href="/bridge">
          <button className="font-bold p-4 rounded-lg bg-blue-500 text-white">
            I have tokens
          </button>
        </Link>
        <Link href="/onramp">
          <button className="font-bold p-4 rounded-lg bg-indigo-500 text-white">
            I am new to Web3
          </button>
        </Link>
      </div>
    </main>
  );
}

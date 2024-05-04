import Image from "next/image";
import { IBM_Plex_Sans } from "next/font/google";
import Link from "next/link";
import { ChainComboBox } from "@/components/ChainComboBox";
import { TokenComboBox } from "@/components/TokenComboBox";

const inter = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center gap-12 p-24 ${inter.className}`}
    >
      <h1 className="text-4xl tracking-widest">BRIDGE</h1>
      <div className="flex flex-row items-center justify-center gap-6">
        <TokenComboBox />
        <ChainComboBox />
      </div>
    </main>
  );
}

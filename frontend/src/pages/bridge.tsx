import Image from "next/image";
import { IBM_Plex_Sans } from "next/font/google";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ChainComboBox } from "@/components/ChainComboBox";
import { TokenComboBox } from "@/components/TokenComboBox";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

const inter = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  const [sourceAmount, setSourceAmount] = useState("0");
  const [sourceChain, setSourceChain] = useState("11155111:ethereum");
  const [sourceToken, setSourceToken] = useState(
    "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE:0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE:ethereum"
  );
  const [destAmount, setDestAmount] = useState("0");
  const [destChain, setDestChain] = useState("84532:base");
  const [destToken, setDestToken] = useState(
    "0xB67B10aB2CE4EA3586383922eFdA5996Aff2Cf94:0xDDbfe4d55164C39078d748f4af3349Ef844453dC:pepe"
  );

  useEffect(() => {
    if (sourceToken.includes("ethereum")) {
      setSourceAmount("0.001");
    } else {
      setSourceAmount("1");
    }
  }, [sourceToken]);

  useEffect(() => {
    if (sourceAmount && Number(sourceAmount) && sourceAmount && sourceToken) {
      setDestAmount("10");
    }
  }, [sourceAmount, sourceChain, sourceToken]);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center gap-12 p-24 ${inter.className}`}
    >
      <h1 className="text-4xl tracking-widest">BRIDGE</h1>
      <div className="flex flex-row w-full items-center justify-center gap-6">
        <div className="flex flex-col items-center justify-center gap-6 p-4 rounded-xl border border-blue-200">
          <div className="flex flex-row items-center justify-center gap-6">
            <TokenComboBox
              value={sourceToken}
              setValue={setSourceToken}
              isDest={false}
            />
            <ChainComboBox value={sourceChain} setValue={setSourceChain} />
          </div>
          <div className="flex flex-row items-center justify-center gap-6 w-full">
            <Input
              type="number"
              placeholder="Amount"
              value={sourceAmount}
              className="w-full cursor-none"
              disabled
            />
            <p className="font-bold uppercase">{sourceToken.split(":")[2]}</p>
          </div>
        </div>
        <ArrowRightIcon />
        <div className="flex flex-col items-center justify-center gap-6 p-4 rounded-xl border border-violet-200">
          <div className="flex flex-row items-center justify-center gap-6">
            <TokenComboBox
              value={destToken}
              setValue={setDestToken}
              isDest={true}
            />
            <ChainComboBox value={destChain} setValue={setDestChain} />
          </div>
          <div className="flex flex-row items-center justify-center gap-6 w-full">
            <Input
              type="number"
              placeholder="Amount"
              value={destAmount}
              className="w-full cursor-none"
              disabled
            />
            <p className="font-bold uppercase">{destToken.split(":")[2]}</p>
          </div>
        </div>
      </div>
      <button className="font-bold p-4 rounded-lg bg-blue-500 text-white">
        Bridge
      </button>
    </main>
  );
}

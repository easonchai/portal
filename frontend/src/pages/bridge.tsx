import Image from "next/image";
import { IBM_Plex_Sans } from "next/font/google";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ChainComboBox } from "@/components/ChainComboBox";
import { TokenComboBox } from "@/components/TokenComboBox";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { publicClient } from "../utils/config";
import { Swap } from "../utils/abis/Swap";
import { createWalletClient, custom } from "viem";
import { sepolia } from "viem/chains";
import toast from "react-hot-toast";

const inter = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Home() {
  const [sourceAmount, setSourceAmount] = useState("0");
  const [sourceChain, setSourceChain] = useState("11155111:ethereum");
  const [sourceToken, setSourceToken] = useState("");
  const [destAmount, setDestAmount] = useState("0");
  const [destChain, setDestChain] = useState("84532:base");
  const [destToken, setDestToken] = useState("");
  const [address, setAddress] = useState<string>();
  const [client, setClient] = useState<any>();

  useEffect(() => {
    if (window) {
      const walletClient = createWalletClient({
        chain: sepolia,
        transport: custom((window as any)?.ethereum),
      });
      setClient(walletClient);
    }
  }, []);

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

  const connect = async () => {
    const [address] = await client.requestAddresses();
    setAddress(address);
  };

  const bridge = async () => {
    const { request } = await publicClient.simulateContract({
      account: address as `0x${string}`,
      address: "0x3333108527DE4122ca2B10162df8884eab9c9837",
      abi: Swap.abi,
      functionName: "swapToUSDC",
      value: BigInt("1000000000000000"),
    });
    try {
      await client.writeContract(request);
      toast.success("Tokens bridge in progress");
    } catch (e) {
      console.error(e);
      toast.error("Error bridging tokens");
    }
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center gap-12 p-24 ${inter.className}`}
    >
      <button onClick={connect}>{address || "Connect Wallet"}</button>
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
      <button
        className="font-bold p-4 rounded-lg bg-blue-500 text-white"
        onClick={bridge}
      >
        Bridge
      </button>
    </main>
  );
}

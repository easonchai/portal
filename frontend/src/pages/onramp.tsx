import Image from "next/image";
import { IBM_Plex_Sans } from "next/font/google";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ChainComboBox } from "@/components/ChainComboBox";
import { TokenComboBox } from "@/components/OnRampTokenComboBox";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";
import {
  GateFiDisplayModeEnum,
  GateFiLangEnum,
  GateFiSDK,
} from "@gatefi/js-sdk";
import crypto from "crypto";

const inter = IBM_Plex_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Onramp() {
  const [sourceChain, setSourceChain] = useState("11155111:ethereum");
  const overlayInstanceSDK = useRef<GateFiSDK | null>(null);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleOnClick = () => {
    if (overlayInstanceSDK.current) {
      if (isOverlayVisible) {
        overlayInstanceSDK.current.hide();
        setIsOverlayVisible(false);
      } else {
        overlayInstanceSDK.current.show();
        setIsOverlayVisible(true);
      }
    } else {
      const randomString = crypto.randomBytes(32).toString("hex");
      overlayInstanceSDK.current = new GateFiSDK({
        merchantId: `${process.env.NEXT_PUBLIC_UNLIMIT_MERCHANTID}`,
        displayMode: GateFiDisplayModeEnum.Overlay,
        nodeSelector: "#overlay-button",
        lang: GateFiLangEnum.en_US,
        isSandbox: true,
        successUrl: "https://www.crypto.unlimit.com/",
        walletAddress: "0x36a279136adDde960599fcA356369C04A96D387E",
        email: "echai2905@gmail.com",
        externalId: randomString,
        defaultFiat: {
          currency: "USD",
          amount: "20",
        },
        defaultCrypto: {
          currency: "USDT-BEP20",
        },
      });
    }
    overlayInstanceSDK.current?.show();
    setIsOverlayVisible(true);
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center gap-12 p-24 ${inter.className}`}
    >
      <h1 className="text-4xl tracking-widest">ONRAMP</h1>
      <div className="flex flex-row w-full items-center justify-center gap-6">
        <div className="flex flex-col items-center justify-center gap-6 p-4 rounded-xl border border-blue-200">
          <div className="flex flex-row items-center justify-center gap-6">
            <TokenComboBox />
            <ChainComboBox value={sourceChain} setValue={setSourceChain} />
          </div>
          <div className="flex flex-row items-center justify-center gap-6 w-full">
            <Input
              type="number"
              placeholder="Amount"
              value={1}
              className="w-full cursor-none"
              disabled
            />
            <p className="font-bold uppercase">CCIP-BnM</p>
          </div>
        </div>
      </div>

      <div id="overlay-button"></div>
      <button
        className="font-bold p-4 rounded-lg bg-blue-500 text-white"
        onClick={handleOnClick}
      >
        Buy
      </button>
    </main>
  );
}

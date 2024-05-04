"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const tokens = [
  {
    value:
      "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE:0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE:ethereum",
    label: "ETH",
  },
  {
    value:
      "0x036CbD53842c5426634e7929541eC2318f3dCF7e:0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238:usdc",
    label: "USDC",
  },
  {
    value:
      "0xB67B10aB2CE4EA3586383922eFdA5996Aff2Cf94:0xDDbfe4d55164C39078d748f4af3349Ef844453dC:pepe",
    label: "PEPE",
  },
  {
    value:
      "0x59D651b4D50377333aa2794e30C4580136E8a113:0x3a82c9E0e0126Be8f862ba47fbbfc925a3DB1D10:meme",
    label: "MEME",
  },
  {
    value:
      "0x14111fb5763F03B26d623dA25EACd21d865F83E5:0xeF8C2efaC6063e30E8C644930f53C01D96ad6C41:haha",
    label: "HAHA",
  },
  {
    value:
      "0xf135900eFd642C1eBE6c88A383679FF295CFcecC:0xd30285A169c3CA5c68Ff998f8dfB60c54c98F0a1:scam",
    label: "SCAM",
  },
];

const destTokens = [
  {
    value:
      "0xB67B10aB2CE4EA3586383922eFdA5996Aff2Cf94:0xDDbfe4d55164C39078d748f4af3349Ef844453dC:pepe",
    label: "PEPE",
  },
  {
    value:
      "0x59D651b4D50377333aa2794e30C4580136E8a113:0x3a82c9E0e0126Be8f862ba47fbbfc925a3DB1D10:meme",
    label: "MEME",
  },
  {
    value:
      "0x14111fb5763F03B26d623dA25EACd21d865F83E5:0xeF8C2efaC6063e30E8C644930f53C01D96ad6C41:haha",
    label: "HAHA",
  },
  {
    value:
      "0xf135900eFd642C1eBE6c88A383679FF295CFcecC:0xd30285A169c3CA5c68Ff998f8dfB60c54c98F0a1:scam",
    label: "SCAM",
  },
];

export function TokenComboBox({ value, setValue, isDest }: any) {
  const [open, setOpen] = React.useState(false);
  const [list, setList] = React.useState(tokens);

  React.useEffect(() => {
    if (isDest) {
      setList(destTokens);
    } else {
      setList(tokens);
    }
  }, [isDest]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? list.find((token) => token.value.toLowerCase() === value)?.label
            : "Token"}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search token..." className="h-9" />
          <CommandEmpty>No token found.</CommandEmpty>
          <CommandGroup>
            {list.map((token) => (
              <CommandItem
                key={token.value}
                value={token.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {token.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === token.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

## Portal

The gateway to any token. Instantly purchase or bridge to your favourite token in one click.

### 💡 Problem Statement

Most bridges only allow you to bridge specific tokens between chains. Onramp services support even lesser chains and lesser tokens. This creates a huge UX friction for users who are looking to get directly into a specific chain or token. What if you could reduce it all down to one click?

Enter Portal, your gateway into any token on any EVM chain. Powered by Chainlink's CCIP, we are able to bridge between chains seamlessly.

Don't have any tokens or don't even know what Web3 is? With Account Abstraction + Unlimit, you are able to purchase any token without worrying about gas or bridging!

### 📟 Technologies Used

- Chainlink CCIP
- ZeroDev Account Abstraction
- Unlimit Crypto
- 1inch
- NextJS
- NestJS
- Foundry

There are two scenarios, each with a different method of handling:

#### Bridging

When bridging, the user deposits any token of choice in the source chain. The smart contract then automatically swaps it to USDC & uses Chainlink's CCIP to bridge it to the target chain. Once bridged, the USDC is then swapped back to your token of choice and sent to you.

#### Purchase/Onramp

When onramping, the user selects the chain of choice and token. Since we are using Unlimit, there is only a subset of tokens & chains that are supported. We would then purchase USDC on an L2 and bridge it to the target chain and swap it just like the bridge scenario above. For this hackathon purposes, we are using USDT on BSC testnet since thats the most readily available.

Both of these scenarios utilizes Account Abstraction by ZeroDev which is optional, and just smoothens the UX for Web2 & Web3 users.

### 🪙 Tokens

| Chain    | Token    | Address                                      |
| -------- | -------- | -------------------------------------------- |
| Base     | PEPE     | `0xB67B10aB2CE4EA3586383922eFdA5996Aff2Cf94` |
| Base     | MEME     | `0x59D651b4D50377333aa2794e30C4580136E8a113` |
| Base     | HAHA     | `0x14111fb5763F03B26d623dA25EACd21d865F83E5` |
| Base     | SCAM     | `0xf135900eFd642C1eBE6c88A383679FF295CFcecC` |
| Ethereum | PEPE     | `0xDDbfe4d55164C39078d748f4af3349Ef844453dC` |
| Ethereum | MEME     | `0x3a82c9E0e0126Be8f862ba47fbbfc925a3DB1D10` |
| Ethereum | HAHA     | `0xeF8C2efaC6063e30E8C644930f53C01D96ad6C41` |
| Ethereum | SCAM     | `0xd30285A169c3CA5c68Ff998f8dfB60c54c98F0a1` |
| BSC      | CCIP-BnM | `0xbFA2ACd33ED6EEc0ed3Cc06bF1ac38d22b36B9e9` |

### ♻️ Chainlink CCIP

| Chain    | Address                                      |
| -------- | -------------------------------------------- |
| Base     | `0xe4f30e770811328b57a346df19c72fb8a326caac` |
| Ethereum | `0x2c5236499e0a2e2e7ce661a57f7223002e1bce99` |
| BSC      | `0x603ae0Ae4a83E863c5FaA8F547a962D8B8e74Eb5` |

### 🦄 Swap Simulator

| Chain    | Address                                      |
| -------- | -------------------------------------------- |
| Base     | `0xEd806AbB88FffbfB515d041DDC9048573E26d9b9` |
| Ethereum | `0x3333108527DE4122ca2B10162df8884eab9c9837` |

#!/bin/bash
source .env
forge script script/BaseCCIP.s.sol:BaseCCIPScript --rpc-url "https://base-sepolia-rpc.publicnode.com" --broadcast --chain-id 84532
forge script script/SepoliaCCIP.s.sol:SepoliaCCIPScript --rpc-url "https://ethereum-sepolia-rpc.publicnode.com" --broadcast --chain-id 11155111
forge script script/BSCCCIP.s.sol:BSCCCIPScript --rpc-url "https://bsc-testnet-rpc.publicnode.com" --broadcast --chain-id 97

# For tokens
# forge script script/Token.s.sol:TokenScript --rpc-url "https://base-sepolia-rpc.publicnode.com" --broadcast --chain-id 84532
# forge script script/Token.s.sol:TokenScript --rpc-url "https://ethereum-sepolia-rpc.publicnode.com" --broadcast --chain-id 11155111

# For Swap
# forge script script/Swap.s.sol:SwapScript --rpc-url "https://base-sepolia-rpc.publicnode.com" --broadcast --chain-id 84532
# forge script script/Swap.s.sol:SwapScript --rpc-url "https://ethereum-sepolia-rpc.publicnode.com" --broadcast --chain-id 11155111
#!/bin/bash
source .env
forge script script/BaseCCIP.s.sol:BaseCCIPScript --rpc-url "https://base-sepolia-rpc.publicnode.com" --broadcast --chain-id 84532
forge script script/SepoliaCCIP.s.sol:SepoliaCCIPScript --rpc-url "https://ethereum-sepolia-rpc.publicnode.com" --broadcast --chain-id 11155111
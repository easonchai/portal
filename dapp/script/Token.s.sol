// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script} from "forge-std/Script.sol";
import {Token} from "../src/Token.sol";

contract TokenScript is Script {
    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);
        new Token("PEPE", "PEPE");
        new Token("MEME", "MEME");
        new Token("HAHA", "HAHA");
        new Token("SCAM", "SCAM");
        vm.stopBroadcast();
    }
}

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script} from "forge-std/Script.sol";
import {Swap} from "../src/Swap.sol";

contract SwapScript is Script {
    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);
        // Base
        // new Swap(0x036CbD53842c5426634e7929541eC2318f3dCF7e, 0x36a279136adDde960599fcA356369C04A96D387E);
        // EthSepolia
        new Swap(0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238, 0x36a279136adDde960599fcA356369C04A96D387E);
        vm.stopBroadcast();
    }
}

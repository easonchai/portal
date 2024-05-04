// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script} from "forge-std/Script.sol";
import {BSCTransferUSDCBasic} from "../src/BSCTransferUSDCBasic.sol";

contract BSCCCIPScript is Script {
    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);
        new BSCTransferUSDCBasic();
        vm.stopBroadcast();
    }
}

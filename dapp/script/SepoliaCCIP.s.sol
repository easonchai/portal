// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script} from "forge-std/Script.sol";
import {SepoliaTransferUSDCBasic} from "../src/SepoliaTransferUSDCBasic.sol";

contract SepoliaCCIPScript is Script {
    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);
        new SepoliaTransferUSDCBasic();
        vm.stopBroadcast();
    }
}

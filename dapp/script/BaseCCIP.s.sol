// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script} from "forge-std/Script.sol";
import {BaseTransferUSDCBasic} from "../src/BaseTransferUSDCBasic.sol";

contract BaseCCIPScript is Script {
    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");

        vm.startBroadcast(deployerPrivateKey);
        new BaseTransferUSDCBasic();
        vm.stopBroadcast();
    }
}

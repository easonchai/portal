// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {IERC20} from "../lib/openzeppelin-contracts/contracts/token/ERC20/IERC20.sol";

contract Swap {
    IERC20 usdc; // USDC Address
    address delegate; // The address that will handle the bridge and swaps

    constructor(address _usdc, address _delegate) {
        usdc = IERC20(_usdc);
        delegate = _delegate;
    }

    // Approve any arbitrary token
    function approve(address _token) public {
        IERC20 token = IERC20(_token);
        uint256 balance = token.balanceOf(msg.sender);
        token.approve(address(this), balance);
    }

    // Swap any token to USDC
    function swapToUSDC(address _fromToken) public {
        IERC20 token = IERC20(_fromToken);
        uint256 balance = usdc.balanceOf(msg.sender);
        token.transferFrom(msg.sender, address(this), balance);
        usdc.transfer(delegate, 1e6);
    }

    // Swap eth to USDC
    function swapToUSDC() public payable {
        usdc.transfer(delegate, 1e6);
    }

    // Swap USDC to token & send to the user
    function swap(address _toToken, address _recipient) public {
        uint256 balance = usdc.balanceOf(msg.sender);
        usdc.transferFrom(msg.sender, address(this), balance);
        IERC20 token = IERC20(_toToken);
        token.transfer(_recipient, 10e18);
    }
}

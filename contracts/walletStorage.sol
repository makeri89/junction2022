// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract WalletStorage {
    string[] wallets;
    
    function addWallet(string memory wallet) public {
        wallets.push(wallet);
    }

    function getWallets() public view returns (string[] memory) {
        return wallets;
    }
}

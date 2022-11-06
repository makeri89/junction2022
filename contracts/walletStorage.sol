// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract WalletStorage is Ownable {
    string[] wallets;
    
    function addWallet(string memory wallet) public only Owner {
        wallets.push(wallet);
    }

    function getWallets() public view returns (string[] memory) {
        return wallets;
    }
}

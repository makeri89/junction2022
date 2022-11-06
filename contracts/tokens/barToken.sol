// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title Universal Income 3000
 */
contract Token is ERC20("Bar Token", "BAR"), Ownable {
    using SafeMath for uint256;
    mapping (address => bool) private isExcludedFromFee;

    string public TOKEN_NAME;
    string public SYMBOL;

    uint256 private COMMUNITY_FEE_RATE;
    uint256 private PENSION_FEE_RATE;

	address payable COMMUNITY_WALLET_ADDRESS;
	address payable PENSION_WALLET_ADDRESS;


    constructor (
        string memory _tokenName,
        string memory _symbol,
        uint256 _communityFee,
        uint256 _pensionFee,
        uint256 _totalSupply,
        address payable _communityWalletAddress,
        address payable _pensionWalletAddress) {
            TOKEN_NAME = _tokenName;
            SYMBOL = _symbol;

            // creating total supply
            _mint(msg.sender, _totalSupply ** 18);

            COMMUNITY_WALLET_ADDRESS = _communityWalletAddress;
            PENSION_WALLET_ADDRESS = _pensionWalletAddress;

            isExcludedFromFee[msg.sender] = true;
            isExcludedFromFee[address(this)] = true;
    }
    
    function transfer(address _toAddress, uint256 _amountToTransfer) override public returns (bool) {
        require(_amountToTransfer > 0, "Transfer amount must be greater than zero");

        // if sender is excluded from fee -> apply no fees on transaction
        if (isExcludedFromFee[_toAddress]) {
            return super.transfer(_toAddress, _amountToTransfer);
        }
        uint256 communityAmount = _calculateCommunityAndPay(_amountToTransfer);
        uint256 pensionAmount = _calculatePensionAndPay(_amountToTransfer);
        
        // an amount (according to pension fee) sent to pension wallet 
        super.transfer(PENSION_WALLET_ADDRESS, pensionAmount);

        uint256 amountToTransferAfterFees = _amountToTransfer.sub(communityAmount).sub(pensionAmount);
        return super.transfer(_toAddress, amountToTransferAfterFees);
    }

    function transferFrom(address _fromAddress, address _toAddress, uint256 _amountToTransfer) override public returns (bool) {
        require(_amountToTransfer > 0, "Transfer amount must be greater than zero");

        // if sender or recepient is excluded from fee -> apply no fees on transaction
        if (isExcludedFromFee[_fromAddress] || isExcludedFromFee[_toAddress]) {
            return super.transfer(_toAddress, _amountToTransfer);
        }

        uint256 communityAmount = _calculateCommunityAndPay(_amountToTransfer);
        uint256 pensionAmount = _calculatePensionAndPay(_amountToTransfer);
        
        // an amount (according to pension fee) sent to pension wallet 
        super.transfer(PENSION_WALLET_ADDRESS, pensionAmount);

        uint256 amountToTransferAfterFees = _amountToTransfer.sub(communityAmount).sub(pensionAmount);
        return super.transfer(_toAddress, amountToTransferAfterFees);
    }
    
    function _calculateCommunityAndPay(uint256 amount) internal returns (uint256) {
        uint256 amountForCommunity = amount.mul(COMMUNITY_FEE_RATE).div(100);
        if (amountForCommunity > 0) {
            // an amount (according to community fee) sent to community wallet 
            super.transfer(COMMUNITY_WALLET_ADDRESS, amountForCommunity);
        }
        return amountForCommunity;
    }
    
    function _calculatePensionAndPay(uint256 amount) internal returns (uint256) {
        uint256 amountForPension = amount.mul(PENSION_FEE_RATE).div(100);
        if (amountForPension > 0) {
            // an amount (according to pension fee) sent to pension wallet 
            super.transfer(PENSION_WALLET_ADDRESS, amountForPension);
        }
        return amountForPension;
    }

    function excludeFromFee(address accountToTakeFeesOff) public onlyOwner {
        isExcludedFromFee[accountToTakeFeesOff] = true;
    }

    function isAccountExcludedFromFee(address account) public view returns(bool) {
        return isExcludedFromFee[account];
    }
    
    function setCommunityFee(uint256 communityRate) public onlyOwner {
		require(communityRate > 0, "Tax rate must be over 0");
		COMMUNITY_FEE_RATE = communityRate;
	}

    function setPensionFee(uint256 pensionFee) public onlyOwner {
		require(pensionFee > 0, "Pension rate must be over 0");
		PENSION_FEE_RATE = pensionFee;
	}


    function getTokenName() view public returns (string memory) {
        return TOKEN_NAME;
    }

    function getTokenSymbol() view public returns (string memory) {
        return SYMBOL;
    } 
	
    function getCommunityFeeRate() public view returns (uint256) {
        return COMMUNITY_FEE_RATE;
    }

    function getPensionFeeRate() public view returns (uint256) {
        return PENSION_FEE_RATE;
    }
}


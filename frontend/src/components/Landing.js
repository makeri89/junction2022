import React from "react";
import styled from 'styled-components';

const Button = styled.button`
  background-color: #8D72E1;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const Landing = ({ accountAddress, accountBalance, isConnected, connectWallet, haveMetamask }) => {
  return (
    <div className="App">
      
      <h1>Landing Page</h1>
      <header className="App-header">
        {haveMetamask ? (
          <div className="App-header">
            {isConnected ? (
              <div className="card">
                <div className="card-row">
                  <h3>Signed in as GPT-3</h3>
                  <h3>Wallet Address:</h3>
                  <p>
                    {accountAddress}
                  </p>
                </div>
                <div className="card-row">
                  <h3>Wallet Balance:</h3>
                  <p>{accountBalance} BNB</p>
                </div>
              </div>
            ) : (
              <p>You are not signed in</p>
            )}
            {isConnected ? (
              <p className="info">Connected Successfully</p>
            ) : (
              <Button onClick={connectWallet}>
                Sign in with Metamask
              </Button>
            )}
          </div>
        ) : (
          <p>Please Install MetaMask</p>
        )}
      </header>
        
    </div>
    
  )
}
export default Landing
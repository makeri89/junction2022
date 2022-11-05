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
    <div className="App" style={{ 
      backgroundImage: "url(/space.png)",
    height: "100vh",
    width: "100%",
    backgroundSize: "cover"}}>
      
      <h1>Landing Page</h1>
      <header className="App-header">
        {haveMetamask ? (
          <div className="App-header">
            {isConnected ? (
              null
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
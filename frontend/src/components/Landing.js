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
      backgroundImage: "url(/futu.png)",
      height: "100vh",
      width: "100%",
      backgroundSize: "cover"}}>
      <br class="sory"/>
      <br/>
      <br/> 
      <br/>
      <br/>
      <br/>
      <br/>      
      <br/>

      <h1 style={{color: '#F6F6F6', fontSize: '5em', fontFamily: 'Verdana'}}>UNIVERSAL INCOME 3000</h1>
      <br />
      <h1 style={{color: '#F6F6F6', fontSize: '2em', fontFamily: 'Verdana'}}>An income ecosystem for the beyond</h1>
      <br/>

      <header className="App-header">
        {haveMetamask ? (
          <div className="App-header">
            {isConnected ? (
              null
            ) : (
              <Button onClick={connectWallet}>
                Sign in with MetaMask <img src="metamaskbag.png" width="64" height="64"/>
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
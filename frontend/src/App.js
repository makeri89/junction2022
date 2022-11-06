import React from "react";
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import "react-step-progress-bar/styles.css";
import "./index.scss";
import { Routes, Route } from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Deploy from "./components/Deploy"
import InitTokens from "./components/InitTokens"
import Landing from "./components/Landing"
import Panel from "./components/Panel"
import { useNavigate } from "react-router-dom";

const App = () => {
  const [progress, setProgess] = useState(0)
  const [haveMetamask, sethaveMetamask] = useState(true);
  const [accountAddress, setAccountAddress] = useState('');
  const [accountBalance, setAccountBalance] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const { ethereum } = window;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const navigate = useNavigate();

  useEffect(() => {
    const { ethereum } = window;
    const checkMetamaskAvailability = async () => {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      sethaveMetamask(true);
    };
    checkMetamaskAvailability();
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/wallet-balance/0x978fDdabA8A86c6bf11d79e2A00cE08BB9507B4C")
    .then(response => response.json())
    .then(data => {
      setAccountBalance(data.balance)
      console.log(data.balance)
    })
  },[])

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        sethaveMetamask(false);
      }
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      console.log(accounts)

      let balance = await provider.getBalance(accounts[0]);
      let bal = ethers.utils.formatEther(balance);
      setAccountAddress(accounts[0]);
      setAccountBalance(bal);
      setIsConnected(true);
      navigate("/init-tokens", { replace: true });
    } catch (error) {
      setIsConnected(false);
    }
  };

  const deploySmartContracts = () => {
      setInterval(() => {
         setProgess(progress => progress + 1)
      }, 100);
  }
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing accountAddress={accountAddress} accountBalance={accountBalance} isConnected={isConnected} connectWallet={connectWallet} haveMetamask={haveMetamask}/>} />
        <Route path="/init-tokens" element={<InitTokens />} />
        <Route path="/deploy" element={<Deploy deploySmartContracts={deploySmartContracts} progress={progress} />} />
        <Route path="/panel" element={<Panel />} />
      </Routes>
    </div>

  );
}

export default App
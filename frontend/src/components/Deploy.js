import React from "react";
import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

import { ProgressBar, Step } from "react-step-progress-bar";
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Button = styled.button`
  background-color: #8D72E1;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const Deploy = ({ deploySmartContracts, progress }) => {
  const [isDeploying, setIsDeploying] = useState(false);

  const handleDeploy = () => {
    deploySmartContracts();
    setIsDeploying(true)
  }

 
  return (
    <div className="App">
      <h1>Initializing Galaxy's Basic Income</h1>
      <br />
      <br />

      <div style={{ paddingLeft: '10em', paddingRight: '10em' }}>
        <ProgressBar
          percent={progress}
          //width={800}
          height={20}
          filledBackground="#2E8B57"
        >
          <Step transition="scale">
            {({ accomplished }) => (
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 25,
                  background: "#8D72E1"
                }}
              ></div>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <div>
                <img
                  alt="img"
                  style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                  width="60"
                  src="/barTokenBg.png"
                />
              </div>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                alt="img"
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="60"
                src="/enviromentTokBg.png"
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                alt="img"
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="60"
                src="/cultureTokBg.png"
              />
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <img
                alt="img"
                style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                width="80"
                src="/foodTokenBg.png"
              />
            )}
          </Step>
        </ProgressBar>
        <br />
        <br />
        {!isDeploying ?
          <Button onClick={() => handleDeploy()}>
            Deploy Smart Contracts
          </Button>
          :
          <Button>
            Deploying... <Spinner animation="border" />
          </Button>
        }
        <div>
            <h3>All set! We are ready to go!</h3>
            <h4>As AI Work-ethics has ruled on the year 2200,<br />we need to provide two AI for the project</h4>

        <div class="container" style={{display: 'flex' }}>

          <Card sx={{ maxWidth: 245 }} style={{marginRight: '2em'}}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="/gpt2.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  GPT-2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Product Owner
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 245 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                image="/gpt3.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  GPT-3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Scrum Master
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        </div>
      </div>
    </div>
    
  )
}

export default Deploy
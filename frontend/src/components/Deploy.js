import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ProgressBar, Step } from 'react-step-progress-bar';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #8d72e1;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const Deploy = () => {
  const [isDeploying, setIsDeploying] = useState(false);
  const [isDeployed, setIsDeployed] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isDeploying) {
      const timeout = setTimeout(() => {
        setProgress((progress) => progress + 1);
      }, 100);
      if (progress === 100) {
        setIsDeploying(false);
        setIsDeployed(true);
        clearTimeout(timeout);
      }
    }
  }, [isDeploying, progress]);

  const handleDeploy = () => {
    setIsDeploying(true);
  };

  const Delay = ({ children, waitBeforeShown }) => {
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsShown(true);
      }, waitBeforeShown);
      return () => clearTimeout(timer);
    }, [waitBeforeShown]);

    return isShown ? children : null;
  };

  return (
    <div className='App'>
      <h1>Initializing Galaxy's Basic Income</h1>
      <br />
      <br />

      <div style={{ paddingLeft: '10em', paddingRight: '10em' }}>
        <ProgressBar
          percent={progress}
          //width={800}
          height={20}
          filledBackground='#2E8B57'
        >
          <Step transition='scale'>
            {({ accomplished }) => (
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 25,
                  background: '#8D72E1',
                }}
              ></div>
            )}
          </Step>
          <Step transition='scale'>
            {({ accomplished }) => (
              <div>
                <img
                  alt='img'
                  style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                  width='60'
                  src='/barTokenBg.png'
                />
              </div>
            )}
          </Step>
          <Step transition='scale'>
            {({ accomplished }) => (
              <div>
                <img
                  alt='img'
                  style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                  width='60'
                  src='/enviromentTokBg.png'
                />
              </div>
            )}
          </Step>
          <Step transition='scale'>
            {({ accomplished }) => (
              <div>
                <img
                  alt='img'
                  style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                  width='60'
                  src='/cultureTokBg.png'
                />
              </div>
            )}
          </Step>
          <Step transition='scale'>
            {({ accomplished }) => (
              <div>
                <img
                  alt='img'
                  style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                  width='80'
                  src='/foodTokenBg.png'
                />
              </div>
            )}
          </Step>
        </ProgressBar>
        <br />
        <br />

        {progress === 0 ? (
          <Button onClick={() => handleDeploy()}>Deploy Smart Contracts</Button>
        ) : 100 > progress > 0 ? (
          <Button>
            Deploying... <Spinner animation='border' size='sm' />
          </Button>
        ) : progress === 100 ? (
          <Button>Deployed!</Button>
        ) : null}

        {isDeployed && (
          <Delay waitBeforeShown={500}>
            <div>
              <Delay waitBeforeShown={1000}>
                <h3>All set! We are ready to go!</h3>
              </Delay>

              <Delay waitBeforeShown={1500}>
                <h4>
                  As AI Work-ethics has ruled on the year 2200,
                  <br />
                  we need to provide two AI for the project
                </h4>
              </Delay>

              <div class='container' style={{ display: 'flex' }}>
                <Delay waitBeforeShown={2000}>
                  <Card sx={{ maxWidth: 245 }} style={{ marginRight: '2em' }}>
                    <CardActionArea>
                      <CardMedia component='img' image='/gpt2.png' />
                      <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                          GPT-2
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                          Product Owner
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Delay>

                <Delay waitBeforeShown={2500}>
                  <Card sx={{ maxWidth: 245 }}>
                    <CardActionArea>
                      <CardMedia
                        component='img'
                        image='/gpt3.png'
                        alt='green iguana'
                      />
                      <CardContent>
                        <Typography gutterBottom variant='h5' component='div'>
                          GPT-3
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                          Scrum Master
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Delay>
              </div>
            </div>
          </Delay>
        )}
      </div>
    </div>
  );
};

export default Deploy;

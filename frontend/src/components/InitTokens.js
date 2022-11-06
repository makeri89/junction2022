import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Button = styled.button`
  background-color: #8d72e1;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const InitTokens = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/deploy");
  }

  return (
    <>
    <br />

    <h2>Tokens overview</h2>
    <br />
    <br />
      <MDBRow className='row-cols-1 row-cols-md-4 g-4'>
      <MDBCol>
        <MDBCard style={{ width: '20rem'}}>
          <MDBCardImage
            src='foodTokenBg.png'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Food Token</MDBCardTitle>
            <MDBCardText>
              Can be used for food related purchaces
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard style={{ width: '20rem' }}>
          <MDBCardImage
            src='enviromentTokBg.png'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Enviroment Token</MDBCardTitle>
            <MDBCardText>
              Token which supports human's on their decreasing of carbon footprint
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard style={{ width: '20rem' }}>
          <MDBCardImage
            src='cultureTokBg.png'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Culture Token</MDBCardTitle>
            <MDBCardText>
              Museums, movies, theater, you name it.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard style={{ width: '20rem' }}>
          <MDBCardImage
            src='barTokenBg.png'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle>Bar Token</MDBCardTitle>
            <MDBCardText>
              Well, maybe you get the point - bars and such. :)
            
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <Button onClick={() => handleContinue()}>Continue</Button>
  
    </>
  )
}
export default InitTokens
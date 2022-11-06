import BasicTable from "./Table"
import styled from 'styled-components';
import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBTextArea,
  MDBInput,
} from 'mdb-react-ui-kit';

const Button = styled.button`
  background-color: #8D72E1;
  color: white;
  font-size: 15px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const Panel = () => {
  const [varyingModal, setVaryingModal] = useState(false);
  const [varyingRecipient, setVaryingRecipient] = useState('');
  const [varyingMessage, setVaryingMessage] = useState('');

  const onChangeRecipient = (event) => {
    setVaryingRecipient(event.target.value);
  };

  const onChangeMessage = (event) => {
    setVaryingMessage(event.target.value);
  };

  return (
    <>
      <br />
      <br />

      <h1>Admin Panel</h1>
      <div>
        <h5>You are managing 3 humans</h5>
        <Button onClick={() => {
          setVaryingModal(!varyingModal);
        }}>
          Sign a human
        </Button>
        <MDBModal show={varyingModal} setShow={setVaryingModal} tabIndex='-1'>
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Enter human wallet address and galaxy</MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={() => setVaryingModal(!varyingModal)}></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <form>
                  <div className='mb-3'>
                    {varyingModal && (
                      <MDBInput
                        value={varyingRecipient}
                        onChange={onChangeRecipient}
                        labelClass='col-form-label'
                        label='Wallet address:'
                      />
                    )}
                  </div>
                  <div className='mb-3'>
                    {varyingModal && (
                      <MDBTextArea
                        value={varyingMessage}
                        onChange={onChangeMessage}
                        labelClass='col-form-label'
                        label='Galaxy'
                      />
                    )}
                  </div>
                </form>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color='secondary' onClick={() => setVaryingModal(!varyingModal)}>
                  Close
                </MDBBtn>
                <MDBBtn>Sign human</MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </div>
      <br />
      <br />

      <BasicTable />
    </>
  )
}
export default Panel
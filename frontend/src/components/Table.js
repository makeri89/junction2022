import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import {
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';

// spagetti warning : D I'm too tired to think
const BasicTable = () => {
  const [tasks, setTasks] = useState([])
  const [centredModal, setCentredModal] = useState(false);
  const [isDailyLoading, setIsDailyLoading] = useState(false);
  const [isSecondLoading, setSecondDailyLoading] = useState(false);
  const [isThirdLoading, setIsThirdLoading] = useState(false);

  const [isFetchingWallets, setIsFetchingWallets] = useState(false);

  const [wallets, setWallets] = useState(['Loading...', 'Loading...', 'Loading'])
  const toggleShow = () => setCentredModal(!centredModal);

  useEffect(() => {
    setIsFetchingWallets(true)
    fetch("http://127.0.0.1:8000/api/v1/gpt-wallets")
    .then(response => response.json())
    .then(data => {
      setWallets(data['wallets'])
      setIsFetchingWallets(false)
    })
  },[])

  const getDailyTask = (row) => {
    // : ))))))
    if (row === 1) {
      setIsDailyLoading(true)
    } else if (row === 2) {
      setSecondDailyLoading(true)
    } else {
      setIsThirdLoading(true)
    }
    fetch("http://127.0.0.1:8000/api/v1/gpt")
      .then(response => response.json())
      .then(data => {
        setTasks(data['GPT-3'][0]['text'])
        if (row === 1) {
          setIsDailyLoading(false)
        } else if (row === 2) {
          setSecondDailyLoading(false)
        } else {
          setIsThirdLoading(false)
        }
      })
  }

  return (
    <div style={{ paddingRight: '2em', paddingLeft: '2em' }}>
      <MDBTable align='middle' color="light">
        <MDBTableHead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Token balances</th>
            <th scope='col'>Galaxy living at</th>
            <th scope='col'>Current mood</th>
            <th scope='col'>Actions</th>
            <th scope='col'>Tasks Finished</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <tr>
            <td>
              <div className='d-flex align-items-center'>
                <img
                  src='doge.jpeg'
                  alt=''
                  style={{ width: '55px', height: '55px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>Doge Shibbe</p>
                  <p className='fw-bold mb-1'>Wallet address</p>
                  {isFetchingWallets
                  ? <Spinner animation="border" size='sm'/>
                  : <p className='text-muted mb-0'>...{wallets[0].substring(wallets[0].length - 10)}</p>
                  }
                </div>
              </div>
            </td>
            <td>
              <div>
                <p className='text-muted mb-0'>Bar Token: <b>52</b></p>
                <p className='text-muted mb-0'>Food Token: <b>35</b></p>
                <p className='text-muted mb-0'>Culture Token: <b>24</b></p>
                <p className='text-muted mb-0'>Enviroment Token: <b>12</b></p>

              </div>
            </td>
            <td>
              <p className='fw-normal mb-1'>Venus</p>
              <p className='text-muted mb-0'>Behind big rock</p>
            </td>
            <td>
              <MDBBtn color='success' rounded>
                Feeling good
              </MDBBtn>
            </td>
            <td>
              {isDailyLoading ?
                <MDBBtn color='dark' rounded>
                  Creating... <Spinner animation="border" size='sm'/>
                </MDBBtn>
                :
                <MDBBtn color='dark' rounded onClick={() => getDailyTask(1)}>
                  Create daily task
                </MDBBtn>
              }

            </td>
            <td>
              <MDBBtn color='grey' rounded onClick={toggleShow}>
                View daily tasks
              </MDBBtn>

              <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                <MDBModalDialog centered>
                  <MDBModalContent>
                    <MDBModalHeader>
                      <MDBModalTitle>Daily tasks by GPT-3</MDBModalTitle>
                      <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                      <p>
                        {tasks}
                      </p>
                    </MDBModalBody>
                    <MDBModalFooter>
                      <MDBBtn color='secondary' onClick={toggleShow}>
                        Close
                      </MDBBtn>
                      <MDBBtn>Mark as Done</MDBBtn>
                    </MDBModalFooter>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
            </td>
          </tr>
          <tr>
            <td>
              <div className='d-flex align-items-center'>
                <img
                  src='cate1.jpeg'
                  alt=''
                  style={{ width: '55px', height: '55px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>Cate Catto</p>
                  <p className='fw-bold mb-1'>Wallet address</p>
                  {isFetchingWallets
                  ? <Spinner animation="border" size='sm'/>
                  : <p className='text-muted mb-0'>...{wallets[1].substring(wallets[1].length - 10)}</p>
                  }
                </div>
              </div>
            </td>
            <td>
              <div>
                <p className='text-muted mb-0'>Bar Token: <b>62</b></p>
                <p className='text-muted mb-0'>Food Token: <b>25</b></p>
                <p className='text-muted mb-0'>Culture Token: <b>34</b></p>
                <p className='text-muted mb-0'>Enviroment Token: <b>52</b></p>
              </div>
            </td>

            <td>
              <p className='fw-normal mb-1'>Earth</p>
              <p className='text-muted mb-0'>Kumpula</p>
            </td>
            <td>
              <MDBBtn color='danger' rounded>
                Issues with food
              </MDBBtn>
            </td>
            <td>
              {isSecondLoading ?
                <MDBBtn color='dark' rounded>
                  Creating... <Spinner animation="border" size='sm'/>
                </MDBBtn>
                :
                <MDBBtn color='dark' rounded onClick={() => getDailyTask(2)}>
                  Create daily task
                </MDBBtn>
              }

            </td>
            <td>
              <MDBBtn color='grey' rounded onClick={toggleShow}>
                <MDBBadge pill color='warning'>In progress</MDBBadge> View daily tasks
              </MDBBtn>

              <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                <MDBModalDialog centered>
                  <MDBModalContent>
                    <MDBModalHeader>
                      <MDBModalTitle>Daily tasks by GPT-3</MDBModalTitle>
                      <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                      <p>
                        {tasks}
                      </p>
                    </MDBModalBody>
                    <MDBModalFooter>
                      <MDBBtn color='secondary' onClick={toggleShow}>
                        Close
                      </MDBBtn>
                      <MDBBtn>Mark as Done</MDBBtn>
                    </MDBModalFooter>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
            </td>
          </tr>
          <tr>
            <td>
              <div className='d-flex align-items-center'>
                <img
                  src='alwyn.jpg'
                  alt=''
                  style={{ width: '55px', height: '55px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>Alwyn</p>
                  <p className='fw-bold mb-1'>Wallet address</p>
                  {isFetchingWallets
                  ? <Spinner animation="border" size='sm'/>
                  : <p className='text-muted mb-0'>...{wallets[2].substring(wallets[2].length - 10)}</p>
                  }
                </div>
              </div>
            </td>
            <td>
              <div>
                <p className='text-muted mb-0'>Bar Token: <b>12</b></p>
                <p className='text-muted mb-0'>Food Token: <b>55</b></p>
                <p className='text-muted mb-0'>Culture Token: <b>234</b></p>
                <p className='text-muted mb-0'>Enviroment Token: <b>22</b></p>
              </div>
            </td>

            <td>
              <p className='fw-normal mb-1'>Moon</p>
              <p className='text-muted mb-0'>Next to river</p>
            </td>
            <td>
              <MDBBtn color='warning' rounded>
                A bit bored
              </MDBBtn>
            </td>
            <td>
              {isThirdLoading ?
                <MDBBtn color='dark' rounded>
                  Creating... <Spinner animation="border" size='sm'/>
                </MDBBtn>
                :
                <MDBBtn color='dark' rounded onClick={() => getDailyTask(3)}>
                  Create daily task
                </MDBBtn>
              }

            </td>
            <td>
              <MDBBtn color='grey' rounded onClick={toggleShow}>
                <MDBBadge pill color='info'>Done</MDBBadge> View daily tasks
              </MDBBtn>

              <MDBModal tabIndex='-1' show={centredModal} setShow={setCentredModal}>
                <MDBModalDialog centered>
                  <MDBModalContent>
                    <MDBModalHeader>
                      <MDBModalTitle>Daily tasks by GPT-3</MDBModalTitle>
                      <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                      <p>
                        {tasks}
                      </p>
                    </MDBModalBody>
                    <MDBModalFooter>
                      <MDBBtn color='secondary' onClick={toggleShow}>
                        Close
                      </MDBBtn>
                      <MDBBtn>Mark as Done</MDBBtn>
                    </MDBModalFooter>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
            </td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </div>
  )
};

export default BasicTable
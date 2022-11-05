import React from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const BasicTable = () => {
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
                  <p className='text-muted mb-0'>0x978fDdda....9507B4C</p>
                </div>
              </div>
            </td>
            <td>
              <div>
                <p className='text-muted mb-0'>BarToken: <b>12</b></p>
                <p className='text-muted mb-0'>FoodToken: <b>55</b></p>
                <p className='text-muted mb-0'>CultureToken: <b>234</b></p>
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
              <MDBBtn color='dark' rounded>
                Create daily task
              </MDBBtn>
            </td>
            <td>
              <div>
                <p className='text-muted mb-0'> <MDBBadge pill color='info'>Done</MDBBadge> 1. <b>Space travel with friends </b></p>
                <p className='text-muted mb-0'>2. <b>Take trash</b></p>
                <p className='text-muted mb-0'><MDBBadge pill color='info'>Done</MDBBadge> 3. <b>Give a ride to hitchhiker</b></p>
              </div>
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
                  <p className='text-muted mb-0'>0x978fDdda....9507B4C</p>
                </div>
              </div>
            </td>
            <td>
              <div>
                <p className='text-muted mb-0'>BarToken: <b>12</b></p>
                <p className='text-muted mb-0'>FoodToken: <b>55</b></p>
                <p className='text-muted mb-0'>CultureToken: <b>234</b></p>
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
              <MDBBtn color='dark' rounded>
                Create daily task
              </MDBBtn>
            </td>
            <td>
              <div>
                <p className='text-muted mb-0'>1. <b>Space travel with friends </b></p>
                <p className='text-muted mb-0'>2. <b>Take trash</b></p>
                <p className='text-muted mb-0'>3. <b>Give a ride to hitchhiker</b></p>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className='d-flex align-items-center'>
                <img
                  src='cate.jpeg'
                  alt=''
                  style={{ width: '55px', height: '55px' }}
                  className='rounded-circle'
                />
                <div className='ms-3'>
                  <p className='fw-bold mb-1'>Cate Second</p>
                  <p className='fw-bold mb-1'>Wallet address</p>
                  <p className='text-muted mb-0'>0x978fDdda....9507B4C</p>
                </div>
              </div>
            </td>
            <td>
              <div>
                <p className='text-muted mb-0'>BarToken: <b>12</b></p>
                <p className='text-muted mb-0'>FoodToken: <b>55</b></p>
                <p className='text-muted mb-0'>CultureToken: <b>234</b></p>
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
              <MDBBtn color='dark' rounded>
                Create daily task
              </MDBBtn>
            </td>
            <td>
              <div>
                <p className='text-muted mb-0'><MDBBadge pill color='info'>Done</MDBBadge> 1. <b>Space travel with friends </b></p>
                <p className='text-muted mb-0'>2. <b>Take trash</b></p>
                <p className='text-muted mb-0'>3. <b>Give a ride to hitchhiker</b></p>
              </div>
            </td>
          </tr>
        </MDBTableBody>
      </MDBTable>
    </div>
  )
};

export default BasicTable
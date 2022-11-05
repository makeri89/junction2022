import BasicTable from "./Table"
import styled from 'styled-components';

const Button = styled.button`
  background-color: #8D72E1;
  color: white;
  font-size: 15px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const Panel = () => {
    return (
        <>
        <br />
        <br />

          <h1>Admin Panel</h1>
          <div>
            <h5>You are managing 3 humans</h5>
            <Button>
              Sign a human
            </Button>
          </div>
          <br />
          <br />

          <BasicTable />
        </>
    )
}
export default Panel
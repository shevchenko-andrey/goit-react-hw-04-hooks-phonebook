import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  width: 400px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 5%;
  border: 2px solid #4f8f2a;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Button = styled.button`
  border-radius: 10px;
  padding: 5px;
  color: #ffffff;
  background-color: #4f8f2a;
`;
export const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;

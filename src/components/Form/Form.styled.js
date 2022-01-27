import styled from 'styled-components';

import { Form, Field } from 'formik';

export const FormText = styled.p`
  padding-top: 5px;
  position: absolute;
  color: #ff0000;
`;
export const Button = styled.button`
  margin: 40px 0;
  padding: 10px;
  border-radius: 10%;
  border: 3px solid #381b08;
  background-color: #f5b780;
`;
export const FormStyled = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const InputForm = styled(Field)`
  display: block;
  border: 2px solid #b1aeac;
  padding: 5px;
  width: 300px;
`;
export const PhoneWrapper = styled.div`
  margin-top: 30px;
`;

import { useRef } from 'react';

import { Formik, ErrorMessage } from 'formik';

import * as yup from 'yup';

import { nanoid } from 'nanoid';

import 'yup-phone';
import PropTypes from 'prop-types';

import {
  FormText,
  Button,
  InputForm,
  FormStyled,
  PhoneWrapper,
} from './Form.styled';

const schema = yup.object().shape({
  name: yup.string().required().min(2).max(20),
  number: yup.string().phone().required(),
});

const ContactForm = ({ onSubmit }) => {
  const loginInputId = useRef(nanoid());
  const telInputId = useRef(nanoid());

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };
  const formError = message => <FormText>{message}</FormText>;

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormStyled autoComplete="off">
        <div>
          <label htmlFor={loginInputId.current}>Name</label>
          <div>
            <InputForm id={loginInputId.current} name="name" type="text" />
            <ErrorMessage name="name" render={formError} />
          </div>
        </div>
        <PhoneWrapper>
          <label htmlFor={telInputId.current}>Number</label>
          <div>
            <InputForm id={telInputId.current} name="number" type="tel" />
            <ErrorMessage name="number" render={formError} />
          </div>
        </PhoneWrapper>
        <Button type="submit">Add contact</Button>
      </FormStyled>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;

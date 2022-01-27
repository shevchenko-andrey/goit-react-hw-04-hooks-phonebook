import React, { Component } from 'react';

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

class ContactForm extends Component {
  loginInputId = nanoid(8);
  telInputId = nanoid(8);

  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values);
    resetForm();
  };
  formError = message => <FormText>{message}</FormText>;
  render() {
    const { loginInputId } = this.loginInputId;
    const { telInputId } = this.telInputId;
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={this.handleSubmit}
      >
        <FormStyled autoComplete="off">
          <div>
            <label htmlFor={loginInputId}>Name</label>
            <div>
              <InputForm id={loginInputId} name="name" type="text" />
              <ErrorMessage name="name" render={this.formError} />
            </div>
          </div>
          <PhoneWrapper>
            <label htmlFor={telInputId}>Number</label>
            <div>
              <InputForm id={telInputId} name="number" type="tel" />
              <ErrorMessage name="number" render={this.formError} />
            </div>
          </PhoneWrapper>
          <Button type="submit">Add contact</Button>
        </FormStyled>
      </Formik>
    );
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;

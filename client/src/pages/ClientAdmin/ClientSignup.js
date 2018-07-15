import React, { Component } from 'react';
//import { graphql } from 'react-apollo';
import { Checkbox, Control, Field, Input, Label, Radio, Help, Select } from 'bulma/components/form';
import Notification from 'bulma/components/notification';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { countries, states, phoneMask } from '../../../src/utils';
import MaskedInput from 'react-text-mask';
import { injectStripe } from 'react-stripe-elements';
import { CardElement } from 'react-stripe-elements';

const CustomInput = ({ label, name, type, placeholder, errors, values, touched, handleBlur }) => (
    <Field>
        <Label>{label}:</Label>
        <Control>
            <Input
                type={type || 'text'}
                color={touched[name] && errors[name] ? 'danger' : ''}
                placeholder={placeholder}
                name={name}
                value={values[name]}
                onBlur={handleBlur}
            />
        </Control>
        {touched[name] && errors[name] && <Help color="danger">{errors[name]}</Help>}
    </Field>
);

class ClientSignup extends Component {
    handleFormSubmit = async (values, { setSubmitting, setErrors, setStatus }) => {
        setSubmitting(false);
        console.log('values', values);
        const { psychicCreate } = this.props;
        try {
            await psychicCreate(values);
        } catch (e) {
            setStatus(e.message);
        }
    };

    getValidationSchema = () => {
        return Yup.object().shape({
            firstname: Yup.string().required('Firstname is required!'),
            lastname: Yup.string().required('Lastname is required!'),
            username: Yup.string()
                .min(3, 'Username must be at least 3 characters long!')
                .required('Username is' + ' required!'),

            password: Yup.string()
                .min(8, 'Password must be at least 8 characters long!')
                .required('Password is' + ' required!'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required!'),
            dob: Yup.date().required('Date of birth is required!'),
            phone: Yup.string()
                .min(10)
                .required('Phone number is required!'),
            address: Yup.string().required('Address is required!'),
            city: Yup.string().required('City is required!'),
            zip: Yup.string().required('Zipcode is required!'),
            country: Yup.mixed()
                .oneOf(countries)
                .required('Country is required!')
        });
    };

    render() {
        const { loading, error } = this.props;
        if (loading) return <h1>Loading ...</h1>;
        if (error) return <h1>Error {error.message}</h1>;

        return (
            <form>
                <label>
                    Card details
                    <CardElement style={{ base: { fontSize: '18px' } }} />
                </label>
            </form>
        );
    }
}
export default injectStripe(ClientSignup);

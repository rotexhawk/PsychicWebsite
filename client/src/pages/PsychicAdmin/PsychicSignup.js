import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { psychicCreate } from './index.gql.js';
import { Checkbox, Control, Field, Input, Label, Radio, Help, Select } from 'bulma/components/form';
import Notification from 'bulma/components/notification';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { countries, states, phoneMask } from '../../../src/utils';
import MaskedInput from 'react-text-mask';

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

class PsychicSignup extends Component {
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
            <Formik
                validationSchema={this.getValidationSchema}
                onSubmit={this.handleFormSubmit}
                render={({
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    status
                }) => {
                    return (
                        <form onChange={handleChange} onSubmit={handleSubmit}>
                            {status && (
                                <Notification>
                                    <h3>Oh oh, something went wrong! Please try again or contact us.</h3>
                                    {status}
                                </Notification>
                            )}
                            <CustomInput
                                label="Firstname"
                                name="firstname"
                                placeholder="Firstname"
                                touched={touched}
                                errors={errors}
                                values={values}
                                handleBlur={handleBlur}
                            />
                            <CustomInput
                                label="Lastname"
                                name="lastname"
                                placeholder="Lastname"
                                touched={touched}
                                errors={errors}
                                values={values}
                                handleBlur={handleBlur}
                            />
                            <CustomInput
                                label="Username"
                                name="username"
                                placeholder="Username"
                                touched={touched}
                                errors={errors}
                                values={values}
                                handleBlur={handleBlur}
                            />
                            <CustomInput
                                label="Password"
                                name="password"
                                placeholder="Password min 8 characters"
                                touched={touched}
                                errors={errors}
                                values={values}
                                handleBlur={handleBlur}
                                type="password"
                            />
                            <CustomInput
                                label="Email"
                                name="email"
                                placeholder="Email address"
                                touched={touched}
                                errors={errors}
                                values={values}
                                handleBlur={handleBlur}
                            />
                            <CustomInput
                                label="Date of Birth"
                                name="dob"
                                placeholder=""
                                touched={touched}
                                errors={errors}
                                values={values}
                                handleBlur={handleBlur}
                                type="date"
                            />
                            <Field>
                                <Label>Phone:</Label>
                                <Control>
                                    <MaskedInput
                                        mask={phoneMask}
                                        onBlur={handleBlur}
                                        value={values.phone}
                                        className={touched.phone && errors.phone ? 'input is-danger' : 'input'}
                                        name="phone"
                                        type="tel"
                                    />
                                </Control>
                                {touched.phone && errors.phone && <Help color="danger">{errors.phone}</Help>}
                            </Field>
                            <CustomInput
                                label="Address"
                                name="address"
                                placeholder="street address"
                                touched={touched}
                                errors={errors}
                                values={values}
                                handleBlur={handleBlur}
                            />
                            <CustomInput
                                label="City"
                                name="city"
                                placeholder="City"
                                touched={touched}
                                errors={errors}
                                values={values}
                                handleBlur={handleBlur}
                            />
                            <Field>
                                <Label>State:</Label>
                                <Control>
                                    <Select name="state" value={values.state}>
                                        {states.map((state, i) => (
                                            <option key={i} value={state}>
                                                {state}
                                            </option>
                                        ))}
                                    </Select>
                                    {touched.state && errors.state && <Help color="danger">{errors.state}</Help>}
                                </Control>
                            </Field>
                            <CustomInput
                                label="Zipcode"
                                name="zip"
                                placeholder="Zipcode"
                                touched={touched}
                                errors={errors}
                                values={values}
                                handleBlur={handleBlur}
                            />
                            <Field>
                                <Label>Country:</Label>
                                <Control>
                                    <Select name="country" value={values.country} onBlur={handleBlur}>
                                        {countries.map((country, i) => (
                                            <option key={i} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </Select>
                                    {touched.country && errors.country && <Help color="danger">{errors.country}</Help>}
                                </Control>
                            </Field>
                            <Input
                                type="submit"
                                color="primary"
                                className="button is-primary primary"
                                value="submit"
                                disabled={!dirty || isSubmitting}
                            />
                        </form>
                    );
                }}
            />
        );
    }
}
export default graphql(psychicCreate, { name: 'psychicCreate' })(PsychicSignup);

import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { psychicCreate } from './index.gql.js';
import { Checkbox, Control, Field, Input, Label, Radio, Help, Select } from 'bulma/components/form';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { countries } from '../../../src/utils';

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
    handleFormSubmit = (values, { setSubmitting, setErrors }) => {
        console.log('values', values);
        setSubmitting(false);
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
                render={({ values, touched, errors, dirty, isSubmitting, handleChange, handleBlur, handleSubmit }) => {
                    return (
                        <form onChange={handleChange} onSubmit={handleSubmit}>
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
                            <CustomInput
                                label="Phone"
                                name="phone"
                                placeholder="123-345-3312"
                                touched={touched}
                                errors={errors}
                                values={values}
                                handleBlur={handleBlur}
                            />
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
                                    <Input type="text" placeholder="state" name="state" value={values.state} />
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
                                    <Select name="country" value={values.country}>
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

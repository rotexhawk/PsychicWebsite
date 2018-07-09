import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import { createPsychic, psychicSignupForm } from './index.gql.js';
import { Checkbox, Control, Field, Input, Label, Radio } from 'bulma/components/form';

class PsychicSignup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            country: '',
            dob: ''
        };
    }

    handleFormChange = e => {
        const field = e.target.name;
        if (!field) return;
        this.setState({
            [field]: e.target.value
        });
    };

    render() {
        const { loading, error } = this.props;
        if (loading) return <h1>Loading ...</h1>;
        if (error) return <h1>Error {error.message}</h1>;

        const { firstname, lastname, username, password, email } = this.state;

        return (
            <form onChange={this.handleFormChange}>
                <Field>
                    <Label>Firstname:</Label>
                    <Control>
                        <Input placeholder="firstName" name="firstname" value={firstname} />
                    </Control>
                </Field>
                <Field>
                    <Label>Lastname:</Label>
                    <Control>
                        <Input placeholder="lastName" name="lastname" value={lastname} />
                    </Control>
                </Field>
                <Field>
                    <Label>Username:</Label>
                    <Control>
                        <Input placeholder="lastName" name="username" value={username} />
                    </Control>
                </Field>
                <Field>
                    <Label>Password:</Label>
                    <Control>
                        <Input type="password" placeholder="password" name="password" value={password} />
                    </Control>
                </Field>
                <Field>
                    <Label>Email:</Label>
                    <Control>
                        <Input type="text" placeholder="email" name="email" value={email} />
                    </Control>
                </Field>
            </form>
        );
    }
}

export default compose(graphql(createPsychic, {}))(PsychicSignup);

import React from 'react';
import Navbar from 'components/Navbar';
import Section from 'bulma/components/section';
import Container from 'bulma/components/container';
import PageFooter from 'components/Footer';
import Columns from 'bulma/components/columns';
import PsychicSignup from './ClientSignup';
import { Elements } from 'react-stripe-elements';

import styled from 'styled-components';

const ClientAdmin = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Section>
                <Container>
                    <Columns>
                        <Columns.Column size={3}>
                            <h1>This is working</h1>
                        </Columns.Column>
                        <Columns.Column size={9}>
                            <Elements>
                                <PsychicSignup />
                            </Elements>
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>
            <PageFooter />
        </React.Fragment>
    );
};

export default ClientAdmin;

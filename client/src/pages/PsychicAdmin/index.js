import React from 'react';
import Navbar from 'components/Navbar';
import Section from 'bulma/components/section';
import Container from 'bulma/components/container';
import PageFooter from 'components/Footer';
import Columns from 'bulma/components/columns';
import styled from 'styled-components';

const PsychicAdmin = () => {
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
                            <h2>This is working</h2>
                        </Columns.Column>
                    </Columns>
                </Container>
            </Section>
            <PageFooter />
        </React.Fragment>
    );
};

export default PsychicAdmin;

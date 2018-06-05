import React from 'react';
import styled from 'styled-components';
import Columns from 'bulma/components/columns';
import Navbar from 'components/Navbar';
import Section from 'bulma/components/section';
import Container from 'bulma/components/container';
import PsychicCards from 'containers/PsychicCards';
import Heading from 'bulma/components/heading';
import Notification from 'bulma/components/notification';
import ReadingsPanel from 'containers/ReadingsPanel';
import PageFooter from 'components/Footer';
import 'bulma/index.sass';
import '../sass/App.scss';

const BadgeContainer = styled.div`
    display: block;
    min-height: 111px;
    position: relative;
    z-index: 100;
    img {
        position: absolute;
        left: 0;
        right: 0;
        display: block;
        float: none;
        margin: 0 auto;
        max-width: 200px;
        z-index: 1;
    }
`;

export default () => (
    <div>
        <Navbar />
        <Section>
            <Container>
                <Section className="has-text-centered">
                    <Heading size={4}>
                        Choose a Psychic Advisor for Live Phone, Chat & Video
                        Readings.
                    </Heading>
                    <Heading size={5}>
                        We've been offering the best readings for 29 years!
                    </Heading>
                </Section>
                <PsychicCards />
                <Section>
                    <BadgeContainer>
                        <img
                            src="./customer-satisfaction-badge-small.png"
                            alt="customer-satisfaction-badge"
                        />
                    </BadgeContainer>
                    <Notification className="is-transparent is-outlined has-text-centered has-vertically-aligned-items">
                        <Heading size={5} style={{ margin: '1.5rem 0 1rem 0' }}>
                            Satisfaction Guaranteed | Learn More
                        </Heading>
                    </Notification>
                </Section>
            </Container>
        </Section>
        <ReadingsPanel />
        <PageFooter />
    </div>
);

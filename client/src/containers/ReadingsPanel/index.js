import React from 'react';
import styled from 'styled-components';
import Columns from 'bulma/components/columns';
import Section from 'bulma/components/section';
import Container from 'bulma/components/container';
import Heading from 'bulma/components/heading';
import BoxRoundMedia from 'components/BoxRoundMedia';
import { pink, yellowBrown, lightBlue, lightBrown } from '../../styles/colors';

const SectionContainer = styled(Section)`
    background-image: url('pattern-chakras-alt-color.jpg');
`;

const ReadingsPanel = () => {
    return (
        <SectionContainer>
            <Container className="has-text-centered">
                <Heading level={3}>Types of Readings</Heading>
                <p>
                    We at KRIYA provide various services to the nature of the
                    clients. Wish how you would like to spend the time here we
                    can talk and come to a conclusion.
                </p>
                <Columns>
                    <BoxRoundMedia
                        color={pink}
                        image="icon-thumb1.jpg"
                        text="Lusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias provident destiny is about voles."
                    />
                    <BoxRoundMedia
                        color={yellowBrown}
                        image="icon-thumb1.jpg"
                        text="Lusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias provident destiny is about voles."
                    />
                    <BoxRoundMedia
                        color={lightBlue}
                        image="icon-thumb1.jpg"
                        text="Lusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias provident destiny is about voles."
                    />
                    <BoxRoundMedia
                        color={lightBrown}
                        image="icon-thumb1.jpg"
                        text="Lusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias provident destiny is about voles."
                    />
                </Columns>
            </Container>
        </SectionContainer>
    );
};

export default ReadingsPanel;

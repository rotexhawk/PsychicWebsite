import React from 'react';
import styled from 'styled-components';
import Columns from 'bulma/components/columns';
import Heading from 'bulma/components/heading';

const Container = styled(Columns.Column)``;
const ColorHeading = styled(Heading)`
    color: ${props => props.color} !important;
`;

const RoundImage = styled.img`
    border: 5px solid ${props => props.color};
    border-radius: 50%;
    max-width: 150px;
    margin: 1.5rem auto;
    display: block;
`;

const BoxRoundMedia = ({ image, text, ...restprops }) => {
    return (
        <Container className="has-text-centered">
            <ColorHeading level={4} {...restprops}>
                Angel Card Readings
            </ColorHeading>
            <RoundImage src={image} {...restprops} />
            <p>{text}</p>
        </Container>
    );
};

export default BoxRoundMedia;

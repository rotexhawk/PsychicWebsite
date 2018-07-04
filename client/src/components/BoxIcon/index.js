import React from 'react';
import styled from 'styled-components';
import Columns from 'bulma/components/columns';
import Heading from 'bulma/components/heading';

const Container = styled(Columns.Column)``;

//#a58251
const HeaderContainer = styled.div`
    display: flex;
    align-items: flex-start;
`;
const TextContainer = styled.div`
    margin-left: 1.5rem;
    max-width: 70%;
`;

const Header = styled(Heading)`
    && {
        color: #484338;
        margin-top: 0.5rem;
        margin-bottom: 0.8rem !important;
    }
`;

const Margin = styled.div`
    width: 100%;
    border-top: 1px dashed #a58251;
    border-bottom: 1px solid #a58251;
    height: 5px;
    margin-bottom: 1.25rem;
`;

const BoxIcon = ({ icon, heading, text, ...restprops }) => {
    return (
        <Container {...restprops}>
            <HeaderContainer>
                <img src={icon} width="50" alt="ying-yang-icon" />
                <TextContainer>
                    <Header size={4} renderAs="h2">
                        {heading}
                    </Header>
                    <Margin />
                    <p>{text}</p>
                </TextContainer>
            </HeaderContainer>
        </Container>
    );
};

export default BoxIcon;

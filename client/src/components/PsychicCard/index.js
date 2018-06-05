import React from 'react';
import Card from 'bulma/components/card';
import Heading from 'bulma/components/heading';
import Media from 'bulma/components/media';
import Content from 'bulma/components/content';
import styled from 'styled-components';

const CardImage = styled(Card.Image)`
    overflow: hidden;
    figure {
        margin: 1rem 1.5rem;
    }
`;

const CardContent = styled(Card.Content)`
    &.card-content {
        padding: 0rem 1.5rem 1rem 1.5rem;
    }
`;

const PsychicCard = ({
    thumb,
    heading,
    subheading,
    body,
    children,
    ...restProps
}) => {
    return (
        <Card {...restProps}>
            <CardImage size="4by3" src={thumb} />
            <CardContent>
                <Media>
                    <Media.Item>
                        <Heading size={6} className="margin-top-flush">
                            {heading}
                        </Heading>
                        <Heading subtitle size={7}>
                            {subheading}
                        </Heading>
                    </Media.Item>
                </Media>
                <Content>{body ? <p>body</p> : children}</Content>
            </CardContent>
        </Card>
    );
};

export default PsychicCard;

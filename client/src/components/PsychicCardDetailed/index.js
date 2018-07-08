import React from 'react';
import Card from 'bulma/components/card';
import Heading from 'bulma/components/heading';
import Media from 'bulma/components/media';
import Content from 'bulma/components/content';
import styled from 'styled-components';
import Columns from 'bulma/components/columns';
import StarRating from 'components/StarRating';

const CardImage = styled(Card.Image)``;

const CardContent = styled(Card.Content)``;

const PsychicCardDetailed = ({
    thumb,
    heading,
    subheading,
    body,
    children,
    rating,
    ...restProps
}) => {
    return (
        <Card {...restProps}>
            <Columns>
                <Columns.Column size={4}>
                    <CardImage size="4by3" src={thumb} />
                </Columns.Column>
                <Columns.Column>
                    <CardContent>
                        <Media>
                            <Media.Item>
                                <Heading size={6} className="margin-top-flush">
                                    {heading}
                                </Heading>
                                <Heading subtitle size={7}>
                                    {subheading}
                                </Heading>
                                <StarRating rating={rating} />
                            </Media.Item>
                        </Media>
                        <Content>{body ? <p>{body}</p> : children}</Content>
                    </CardContent>
                </Columns.Column>
            </Columns>
        </Card>
    );
};

export default PsychicCardDetailed;

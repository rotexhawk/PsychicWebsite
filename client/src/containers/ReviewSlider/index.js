import React from 'react';
import styled from 'styled-components';
import PsychicCard from 'components/PsychicCard';
import query from './index.gql';
import { graphql } from 'react-apollo';
import Columns from 'bulma/components/columns';
import Button from 'bulma/components/button';
import Carousel from 'nuka-carousel';
import SVG from 'components/SVG';

const ReviewCard = styled.div`
    height: 320px;
`;

const Quote = styled.blockquote`
    font-size: 1.2rem;
    &:before {
        content: '\\201C';
    }
    &:after {
        content: '\\201D';
    }
`;

const Avatar = styled.img`
    border: 1px solid transparent;
    border-radius: 50%;
    margin: 1rem auto;
`;

const PrevButton = ({ previousSlide }) => {
    return <SVG name="prev" onClick={previousSlide} />;
};

const NextButton = ({ nextSlide }) => {
    return <SVG name="next" onClick={nextSlide} />;
};

const ReviewSlider = ({ data }) => {
    if (data.loading) return <p>Loading...</p>;
    if (data.error) return <p>Error :(</p>;

    return (
        <Carousel
            initialSlideHeight={100}
            renderCenterLeftControls={PrevButton}
            renderCenterRightControls={NextButton}>
            {data.reviews.map(review => (
                <ReviewCard className="has-text-centered">
                    <Quote>{review.text}</Quote>
                    <Avatar src={review.avatar} alt="reviewer-avatar" />
                    <h5>{review.author}</h5>
                </ReviewCard>
            ))}
        </Carousel>
    );
};

export default graphql(query)(ReviewSlider);

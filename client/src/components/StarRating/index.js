import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    svg {
        width: ${props => props.width};
        height: ${props => props.height};
    }
`;

const Star = ({ colored }) => {
    return (
        <svg version="1.1" x="0px" y="0px" viewBox="0 0 426.667 426.667">
            <polygon
                fill={colored ? '#EECD56' : 'gainsboro'}
                points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91 81.485,416.226 106.667,269.41 0,165.436 147.409,144.017"
            />
        </svg>
    );
};

const StarRating = ({ rating, ...restProps }) => {
    const { score, max_score } = rating;
    const stars = [...new Array(max_score)];
    return (
        <Container {...restProps}>
            {stars.map((star, i) => (
                <Star key={i} colored={i < score ? true : false} />
            ))}
        </Container>
    );
};

StarRating.defaultProps = {
    width: '1.5rem',
    height: '1.5rem',
};

StarRating.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    rating: PropTypes.object,
};

export default StarRating;

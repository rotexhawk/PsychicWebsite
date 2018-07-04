import React from 'react';
import iconList from './util.js';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
    svg{
        width: ${props => props.width}
        height: ${props => props.height}
        fill: ${props => props.fill}
    }
`;
const SVG = ({ name, ...restProps }) => {
    return (
        <Container
            {...restProps}
            dangerouslySetInnerHTML={{ __html: iconList[name] }}
        />
    );
};

SVG.defaultProps = {
    width: '30px',
    height: '30px',
};

export default SVG;

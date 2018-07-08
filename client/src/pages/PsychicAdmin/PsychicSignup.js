import React from 'react';
import { graphql } from 'react-apollo';
import { createPsychic } from './index.gql.js';

const PsychicSignup = () => {
    return <h1>This is working too</h1>;
};

export default graphql(createPsychic, {})(NewPsychic);

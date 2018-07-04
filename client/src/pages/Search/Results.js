import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { searchResult } from './index.gql.js';
import PropTypes from 'prop-types';
import PsychicCard from 'components/PsychicCard';
import Columns from 'bulma/components/columns';

class Results extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { loading, error, search } = this.props;
        if (loading) return <h1>loading ...</h1>;
        if (error) return <h1>Error... {error.message} </h1>;

        return (
            <Columns>
                {search.results.map((psychic, i) => (
                    <Columns.Column size={3}>
                        <PsychicCard
                            key={i}
                            thumb={psychic.thumbnail}
                            heading={psychic.nicename}
                            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio.#css"
                        />
                    </Columns.Column>
                ))}
            </Columns>
        );
    }
}

Results.propTypes = {
    filter: PropTypes.object,
    limit: PropTypes.number,
    offset: PropTypes.number,
};

export default graphql(searchResult, {
    props: ({ data }) => data,
    options(ownProps) {
        return {
            variables: {
                filter: ownProps.filter,
                limit: ownProps.limit,
                offset: ownProps.offset,
            },
        };
    },
})(Results);

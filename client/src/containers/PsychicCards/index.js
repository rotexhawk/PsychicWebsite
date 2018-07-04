import React from 'react';
import styled from 'styled-components';
import PsychicCard from 'components/PsychicCard';
import query from './index.gql';
import { graphql } from 'react-apollo';
import Columns from 'bulma/components/columns';
import Button from 'bulma/components/button';

const PsychicCards = ({ data }) => {
    if (data.loading) return <p>Loading...</p>;
    if (data.error) return <p>Error :(</p>;
    return (
        <Columns>
            {data.psychics.map(psychic => (
                <Columns.Column>
                    <PsychicCard
                        thumb={psychic.thumbnail}
                        heading={psychic.nicename}
                        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. @bulmaio.#css"
                    />
                </Columns.Column>
            ))}
            <Columns.Column size="12" className="has-text-centered">
                <Button color="primary">View all &raquo;</Button>
            </Columns.Column>
        </Columns>
    );
};

export default graphql(query)(PsychicCards);

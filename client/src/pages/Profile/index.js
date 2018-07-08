import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { profileQuery } from './query';
import PropTypes from 'prop-types';
import Navbar from 'components/Navbar';
import Section from 'bulma/components/section';
import Container from 'bulma/components/container';
import PageFooter from 'components/Footer';
import Columns from 'bulma/components/columns';
import styled from 'styled-components';
import Box from 'bulma/components/box';
import Button from 'bulma/components/button';
import PsychicCardDetailed from 'components/PsychicCardDetailed';

class Profile extends Component {
    render() {
        const { loading, error, psychic } = this.props;

        if (loading) return <h1>loading ...</h1>;
        if (error) return <h1>Error... {error.message} </h1>;
        if (!psychic) return <h1>Error ... </h1>;
        const rating = {
            score: 4,
            max_score: 5,
        };

        return (
            <React.Fragment>
                <Navbar />
                <Section>
                    <Container>
                        <Columns>
                            <Columns.Column size={8}>
                                <PsychicCardDetailed
                                    id={psychic.id}
                                    thumb={psychic.thumbnail}
                                    heading={psychic.nicename}
                                    subheading={psychic.tagline}
                                    rating={rating}
                                />
                            </Columns.Column>
                            <Columns.Column size={4}>
                                <h1>For calendar</h1>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </Section>
            </React.Fragment>
        );
    }
}

export default graphql(profileQuery, { props: ({ data }) => data })(Profile);

import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { searchForm, updateForm } from './index.gql.js';
import Navbar from 'components/Navbar';
import Section from 'bulma/components/section';
import Container from 'bulma/components/container';
import PageFooter from 'components/Footer';
import Columns from 'bulma/components/columns';
import styled from 'styled-components';
import Box from 'bulma/components/box';

import {
    Field,
    Label,
    Control,
    Input,
    Radio,
    Checkbox,
} from 'bulma/components/form';

import Results from './Results';

const SearchFacet = styled(Box)`
    label {
        display: block;
    }
`;

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: null,
            offset: null,
            limit: null,
        };
    }

    handleFormChange = e => {
        const { updateForm } = this.props;
        updateForm({
            variables: {
                name: e.target.name,
                value: e.target.value,
                checked: e.target.checked,
            },
        });
    };

    handleFormSubmit = e => {
        e.preventDefault();
        const {
            sort,
            name,
            specialties,
            reading_style,
            tools,
        } = this.props.form;

        this.setState({
            filter: {
                name,
                sort: sort.checked,
                specialties: specialties.checked,
                reading_style: reading_style.checked,
                tools: tools.checked,
            },
            limit: null,
            offset: null,
        });
    };

    render() {
        const { loading, error, form } = this.props;

        if (loading) return <h1>loading ...</h1>;
        if (error) return <h1>Error... {error.message} </h1>;
        if (!form) return <h1>Error ... </h1>;

        const { sort, name, specialties, reading_style } = form;

        const { filter, limit, offset } = this.state;

        return (
            <React.Fragment>
                <Navbar />
                <Section>
                    <Container>
                        <Columns>
                            <Columns.Column size={3}>
                                <form
                                    onChange={this.handleFormChange}
                                    onSubmit={this.handleFormSubmit}>
                                    <SearchFacet>
                                        <Field>
                                            <Label>
                                                Find By Name or Extension:
                                            </Label>
                                            <Control>
                                                <Input
                                                    placeholder="Text input"
                                                    name="name"
                                                    value={name}
                                                />
                                            </Control>
                                        </Field>
                                    </SearchFacet>
                                    <SearchFacet>
                                        <Field>
                                            <Label>Sort By</Label>
                                            <Control>
                                                {sort.options.map(
                                                    (filter, i) => (
                                                        <Radio
                                                            key={i}
                                                            name="sort"
                                                            value={filter}
                                                            checked={
                                                                filter ===
                                                                sort.checked
                                                                    ? true
                                                                    : false
                                                            }>
                                                            {filter}
                                                        </Radio>
                                                    )
                                                )}
                                            </Control>
                                        </Field>
                                    </SearchFacet>
                                    <SearchFacet>
                                        {specialties.options.map(
                                            (specialty, i) => (
                                                <Checkbox
                                                    type="checkbox"
                                                    value={specialty}
                                                    key={i}
                                                    name="specialties">
                                                    {specialty}
                                                </Checkbox>
                                            )
                                        )}
                                    </SearchFacet>
                                    <SearchFacet>
                                        {reading_style.options.map(
                                            (style, i) => (
                                                <Checkbox
                                                    type="checkbox"
                                                    value={style}
                                                    key={i}
                                                    name="reading_style">
                                                    {style}
                                                </Checkbox>
                                            )
                                        )}
                                    </SearchFacet>
                                    <Input
                                        type="submit"
                                        color="primary"
                                        className="button is-primary primary"
                                        value="Search"
                                    />
                                </form>
                            </Columns.Column>
                            <Columns.Column size={9}>
                                <Results
                                    filter={filter}
                                    offset={offset}
                                    limit={limit}
                                />
                            </Columns.Column>
                        </Columns>
                    </Container>
                </Section>
                <PageFooter />
            </React.Fragment>
        );
    }
}

export default compose(
    graphql(searchForm, { props: ({ data }) => data }),
    graphql(updateForm, { name: 'updateForm' })
)(Search);

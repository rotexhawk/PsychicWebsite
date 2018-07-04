import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import Search from './pages/Search/';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';
import { HttpLink } from 'apollo-link-http';

import { searchForm, searchResult } from './pages/Search/index.gql.js';

const defaults = {
    form: {
        __typename: 'form',
        name: 'test',
        sort: {
            __typename: 'sort',
            checked: '',
            options: [
                'Available',
                'Busy',
                'Star Rating',
                'Alphabetical',
                'New',
                'Price-(Low to High)',
                'Price-(Hight to Low)',
            ],
        },
        specialties: {
            __typename: 'specialties',
            checked: [],
            options: [
                'Career Psychic',
                'Clairaudient',
                'Clairsentient',
                'Clairvoyant',
                'Energy Healing',
                'Intuitive/Empath',
                'Love Psychic',
                'Pet Psychic',
                'Psychic Medium',
            ],
        },
        tools: {
            __typename: 'tools',
            checked: [],
            options: [
                'Angel Cards',
                'Astrology',
                'Can Read Without Tools',
                'Cartomancy',
                'Crystals',
                'Dowsing',
                'Numerology',
                'Reiki/Healing',
                'Tarot',
            ],
        },
        reading_style: {
            __typename: 'reading_style',
            checked: [],
            options: [
                'Compassionate',
                'Direct',
                'Expressive',
                'Thoughtful',
                'Wise',
            ],
        },
        expertises: [
            {
                __typename: 'expertise_filter',
                subject: 'Love, Relationships & Family',
                expertise: [
                    'Breakups/Divorce',
                    'Cheating/Wandering Hearts',
                    'Finding love/Soulmates',
                    'LGBT Relationships',
                    'Sex/Intimacy',
                    'Sibling/Parental Issues',
                    'Social Media Influence',
                    'Toxic Relationships',
                ],
            },
        ],
    },
};

const mergeState = (state, name, value, checked) => {
    let field = state.form[name];

    if (typeof field === 'string') {
        return { [name]: value };
    } else if (typeof field.checked === 'string') {
        return {
            [name]: {
                ...field,
                checked: value,
            },
        };
    } else if (typeof field === 'object') {
        return {
            [name]: {
                ...field,
                checked: checked
                    ? [...field.checked, value]
                    : field.checked.filter(filter => filter !== value),
            },
        };
    }
};

const cache = new InMemoryCache();

const stateLink = withClientState({
    cache,
    defaults,
    resolvers: {
        Mutation: {
            updateForm: (_, { name, value, checked }) => {
                const previousState = cache.readQuery({
                    query: searchForm,
                });

                const data = {
                    ...previousState,
                    form: {
                        ...previousState.form,
                        ...mergeState(previousState, name, value, checked),
                    },
                };

                cache.writeData({
                    query: searchForm,
                    data,
                });
            },
        },
        query: {
            search: (_, { filter, limit, offset }) => {},
        },
    },
});

const client = new ApolloClient({
    link: ApolloLink.from([
        stateLink,
        new HttpLink({
            uri: `http://stag.cyberserge.com:3333/graphql`,
            opts: {
                mode: 'no-cors',
            },
        }),
    ]),
    cache,
});

const Root = () => (
    <ApolloProvider client={client}>
        {/* <App /> */}
        <Search />
    </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

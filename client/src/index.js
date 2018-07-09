import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import Search from './pages/Search/';
import Profile from './pages/Profile';
import PsychicAdmin from './pages/PsychicAdmin';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';
import { HttpLink } from 'apollo-link-http';

import { defaults } from './resolvers/defaultState';
import { resolvers } from './resolvers/';

const cache = new InMemoryCache();

const stateLink = withClientState({
    cache,
    defaults,
    resolvers
});

const client = new ApolloClient({
    link: ApolloLink.from([
        stateLink,
        new HttpLink({
            uri: `http://stag.cyberserge.com:3333/graphql`,
            opts: {
                mode: 'no-cors'
            }
        })
    ]),
    cache
});

const Root = () => (
    <ApolloProvider client={client}>
        {/* <App /> */}
        {/* <Search /> */}
        {/* <Profile /> */}
        <PsychicAdmin />
    </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

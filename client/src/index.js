import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
    uri: `http://stag.cyberserge.com:3333/graphql`,
    opts: {
        mode: 'no-cors',
    },
});

const Root = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

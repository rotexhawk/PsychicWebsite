import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import cors from 'cors';
import schema from '../schema';

const app = express();

app.use(
    '/graphql',
    bodyParser.json(),
    cors(),
    graphqlExpress({
        schema: schema,
        formatError: error => ({
            message: error.message,
            locations: error.locations,
            stack: error.stack ? error.stack.split('\n') : [],
            path: error.path,
        }),
    })
);

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

export default app;

import { psychichSearch } from './search';

const queries = [psychichSearch];

const combineResolvers = () => {
    return queries.reduce((acc, curr) => {
        return {
            ...acc,
            Mutation: {
                ...acc.Mutation,
                ...curr.Mutation,
            },
            query: {
                ...acc.query,
                ...curr.query,
            },
        };
    }, {});
};

export const resolvers = { ...combineResolvers() };

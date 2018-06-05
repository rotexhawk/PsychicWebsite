import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import mocks from './mocks';

import UserType from './User.gql';
import UserResolver from './User.js';
import PsychicType from './Psychic.gql';

const typeDefs = [UserType, PsychicType];
const resolvers = [UserResolver];

const schema = makeExecutableSchema({ typeDefs, resolvers });

addMockFunctionsToSchema({ schema, mocks, preserveResolvers: true });

export default schema;

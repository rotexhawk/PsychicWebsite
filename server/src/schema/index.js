import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import mocks from './mocks';
import RootType from './Root.gql';
import RootResolver from './Root';
import UserType from './User.gql';
import UserResolver from './User';
import PsychicType from './Psychic.gql';
import ReviewType from './Review.gql';
import SearchType from './Search.gql';
import AccountType from './Account.gql';
import AccountResolver from './Account';

const typeDefs = [RootType, AccountType, UserType, PsychicType, ReviewType, SearchType];
const resolvers = [RootResolver, AccountResolver, UserResolver];

const schema = makeExecutableSchema({ typeDefs, resolvers });

addMockFunctionsToSchema({ schema, mocks, preserveResolvers: true });

export default schema;

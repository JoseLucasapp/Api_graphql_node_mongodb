import startServer from "./startServer";
import typeDefs from './graphQl/typeDefs';
import resolvers from './graphQl/resolvers';

startServer({typeDefs, resolvers});
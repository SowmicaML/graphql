const { ApolloServer } = require("apollo-server");
require("dotenv").config();

//types(query/mutation/subscription)
const typeDefs = `
 type Query{
     totalPosts: Int!

 }`;

//resolvers
const resolvers = {
  Query: {
    totalPosts: () => 42,
  },
};

//graphqlserver
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

apolloServer.listen(process.env.PORT, function () {
  console.log(`server is ready at 8000`);
});

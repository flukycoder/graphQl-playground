import { GraphQLServer } from "graphql-yoga";

const typeDefs = `
  type Query {
    hello: String!
    me:User!
  }
  type User {
      name:String!,
      id:Int!
  }
`;

const resolvers = {
  Query: {
    hello: () => `Hello World`,
    me: () => {
      return {
        name: "ezak",
        id: 21321,
      };
    },
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Server is running on localhost:4000"));

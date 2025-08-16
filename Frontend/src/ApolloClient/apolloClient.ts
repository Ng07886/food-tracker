// src/apolloClient.ts
import { ApolloClient} from "@apollo/client";
import { cache } from "./ApolloState";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache,
});

export default client;

import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
    type Query{
        helloWord: String!
    }
`
const server = new ApolloServer({
    typeDefs, 
})

server.listen().then((URL) => {
    console.log(`SERVER RUNING ON ${URL}`)
})
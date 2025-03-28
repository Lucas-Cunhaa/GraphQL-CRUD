import { ApolloServer, gql } from "apollo-server";

type User = {
    id: number,
    name: string,
}
const users: User[] = []

const typeDefs = gql`
    type User {
        id: Int!
        name: String!
    }
    type Query{
       users: [User!]!
    }
    type Mutation {
    createUser(id: String, name: String): User
}
`
const server = new ApolloServer({
    typeDefs, 
    resolvers: {
        Query: {
            users: () => {
                return users
            }
        },

        Mutation: {
            createUser: (parent, args, ctx) => {
                const user = {
                    id: parseInt(args.id), 
                    name: args.name
                }
                users.push(user)

                return user
            }
        }
    }
})

server.listen().then(({url}) => {
    console.log(`SERVER RUNING ON ${url}`)
})
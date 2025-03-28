import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import "reflect-metadata";
import { AppointmentsResolver } from "./src/resolvers/appointments-resolver";
import path from "node:path";

async function bootstrap() {
    const schema = await buildSchema({
        resolvers: [
            AppointmentsResolver,
        ],
        emitSchemaFile: path.resolve(__dirname, "schema.gql")
    })
    const server = new ApolloServer({
        schema,
    })
    const { url } = await server.listen()

    console.log(`SERVER RUNING ON ${url}`)

}

bootstrap()
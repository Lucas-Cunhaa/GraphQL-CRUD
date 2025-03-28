import { Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class AppointmentsResolver {
    @Query(() => String)
    async helloWorld() {
       return "hello zin"
    }

    @Mutation(() => Boolean)
    async createAppointment() {
        
        return true
    }
}
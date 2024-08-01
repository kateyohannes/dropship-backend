import type { GraphQLContext } from "@config/context"

const userResolvers = {
    Query: {

    },
    Mutation: {
        registerUser: async (parent: unknown, args: {}, context: GraphQLContext) => {
            try{
                
            }catch(err){

            }
        },
        // createProfile: async (_, { input }) => {
        //     // Database operations to create a profile for a user
        //     // Return the newly created profile
        // },
        // updateProfile: async (_, { input }) => {
        //     // Database operations to update a profile for a user
        //     // Return the updated profile
        // },
        // deleteUser: async (_, { id }) => {
        //     // Database operations to delete a user
        //     // Return the deleted user
        // }
    }
}

export default userResolvers
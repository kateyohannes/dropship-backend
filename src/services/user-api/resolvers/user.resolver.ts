import type { GraphQLContext } from "@config/context"

const userResolvers = {
    Query: {
        user: async (parent: unknown, args: { id: string }, context: GraphQLContext) => {
            try{
                
                const data = await context.prisma.user.findUnique({
                    where: {
                        id: args?.id
                    }
                })
                return data
            }catch(err){
                throw new Error("error occured white user")
            }
        },
        userList: async (parent: unknown, args: {}, context: GraphQLContext) => {
            try{
                const data = await context.prisma.user.findRaw()
                return {
                    totalCount: data.length,
                    node: data
                }
            }catch(err){
                throw new Error("error occured while userList")
            }
        },
    },
    Mutation: {
        registerUser: async (parent: unknown, args: any, context: GraphQLContext) => {
            try {
                const body = args.input
                const data = await context.prisma.user.create({
                    data: {
                        ...body
                    }
                })
                return data
            } catch (err) {
                throw new Error("error occured while registerUser")
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
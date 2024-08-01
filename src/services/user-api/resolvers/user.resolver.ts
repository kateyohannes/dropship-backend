
const userresolvers = {
    Query: {

    },
    Mutation: {
        registerUser: async (_, { input }) => {
            try{
                return {
                    id: '1',
                    username: input.username,
                    password: input.password,
                    isActive: true,
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            }catch(err){

            }
        },
        createProfile: async (_, { input }) => {
            // Database operations to create a profile for a user
            // Return the newly created profile
        },
        updateProfile: async (_, { input }) => {
            // Database operations to update a profile for a user
            // Return the updated profile
        },
        deleteUser: async (_, { id }) => {
            // Database operations to delete a user
            // Return the deleted user
        }
    }
}
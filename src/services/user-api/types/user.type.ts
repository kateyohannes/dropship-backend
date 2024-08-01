
const usertype = `
    scalar DataTime
    type User {
        id: ID
        username: String
        password: String
        profile: Profile
        isActive: Boolean
        createdAt: DateTime
        updatedAt: DateTime
    }

    type UserConnection{
        totalCount: Int
        node: [User]
    }

    type Address{
        type String
        state String?
        city String?
        country String?
        point Point?
    }

    type Point{
        latitude Float
        longtude Float
    }

    type Profile{
        firstname: String
        lastname: String
        profilePictureUrl: String
        gender: Gender
        bod: DateTime
        address: Address
    }

    type Query {
        user(id: ID!): User
        userList: UserConnection!
    }

    input RegisterUserInput{
        username: String!
        password: String!
    }

    type Mutation {
        registerUser(input: RegisterUserInput): User
        createProfile(input: ProfileInput): Profile
        updateProfile(input: ProfileUpdateInput): Profile
        
        deleteUser(id: ID!): User

    }

    enum Gender{
        Male
        Female
    }
`

export default usertype;
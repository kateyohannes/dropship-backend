
const usertype = `
    scalar DataTime
    type Fullname{
        firstname: string
        middlename: string
        lastname: string
    }

    type Profile{
        fullname: Fullname
        gender: Gender
        bod: DateTime
    }
    type User {
        id: string

        profile: Profile
    }

    type Query {
    
    }

    type Mutation {
    
    }

    enum Gender{
        Male
        Female
    }
`
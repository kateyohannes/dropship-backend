
import { mergeTypeDefs } from "@graphql-tools/merge"
import usertype from "./user.type"

const typeDefs = mergeTypeDefs([
    usertype,
])

export default typeDefs
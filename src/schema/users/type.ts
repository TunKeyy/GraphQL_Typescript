// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// Thought type
const UserType = new GraphQLObjectType({
    name: 'user',
    description: '...',

    fields: () => ({
        id: { type: GraphQLInt },
        username: { type: GraphQLString },
        password: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString }
    })
})

export default UserType
// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import UserType from '../type'
import { getAllUser, getUserById } from '../resolvers'

// Thoughts All
export const users = {
    type: new GraphQLList(UserType),
    resolve: getAllUser
}

// Thought By ID
export const user = {
    type: UserType,
    args: {
        id: { type: GraphQLInt }
    },
    resolve: getUserById
}
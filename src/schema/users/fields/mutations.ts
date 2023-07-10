// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import UserType from '../type'
import { create, remove } from '../resolvers'

// Thought create
export const userCreate = {
    type: UserType,
    args: {
        username: {
            name: 'username',
            type: GraphQLString
        },

        password: {
            name: 'password',
            type: GraphQLString
        }
    },
    resolve: create
}

// Thought remove
export const userRemove = {
    type: UserType,
    args: {
        id: {
            name: 'id',
            type: GraphQLInt
        }
    },
    resolve: remove
}
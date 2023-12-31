// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
import * as thought from './users/fields/mutations'

// Mutation
const mutation = new GraphQLObjectType({
    name: 'mutations',
    description: '...',

    fields: {
        ...thought
    }
})

export default mutation

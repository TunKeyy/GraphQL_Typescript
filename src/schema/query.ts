// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
import * as thought from './users/fields/query'

// Query
const query = new GraphQLObjectType({
    name: 'query',
    description: '...',

    fields: () => ({
        ...thought
    })
})

export default query
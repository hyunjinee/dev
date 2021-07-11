const graphql = require('graphql')
const Book = require('../models/book')
const Author = require('../models/author')

const {GraphQLObjectType, GraphQLString} = graphql


const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id:  { type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLString}},
            resolve(parent, args) {
            // code to get data from db/ other source
            }
        }
    }
})


const Mutation = new GraphQLObjectType({
    name:'Mutation',
    fields: {
        addAuthor: {
            type: AuthorType,
            args:{
                name: {type: GraphQLString},
                age: {type: graphql.GraphQLInt}
            },
            resolve(parent, args) {
                let author = new Author({
                    name: args.name,
                    age: args.age
                })
                return author.save()
            }
        },
        addBook: {
            type: Booktype,
            args: {
                name: {type: GraphQLString},
                genre: {type: GraphQLString},
                authorId: {type: graphql.GraphQLID}
            },
            resolve(parent, args) {
                let book = new Book({
                    name: args.name,
                    genre: args.gensre,
                    authorId: args.authorId
                })
                return book.save();
            }
        }
    }
})



module.exports = new graphql.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})
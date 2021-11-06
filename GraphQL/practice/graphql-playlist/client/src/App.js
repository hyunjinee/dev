import React from 'react'
import BookList from './components/BookList'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>heelo</h1>
        <BookList />
      </div>
    </ApolloProvider>
  )
}

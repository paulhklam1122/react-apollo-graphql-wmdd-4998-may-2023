import 'antd/dist/reset.css'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import './App.css'
import Title from './components/layout/Title'
import AddContact from './components/forms/AddContact'
import Contacts from './components/lists/Contacts'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

const App = () => (
  <ApolloProvider client={client}>
    <div className='App'>
      <Title />
      <AddContact />
      <Contacts />
    </div>
  </ApolloProvider>
)

export default App

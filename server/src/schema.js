import find from 'lodash.find'
import remove from 'lodash.remove'

const contactsDataArray = [
  {
    id: '1',
    firstName: 'Paul',
    lastName: 'Lam'
  },
  {
    id: '2',
    firstName: 'John',
    lastName: 'Smith'
  },
  {
    id: '3',
    firstName: 'Jane',
    lastName: 'Doe'
  }
]

const typeDefs = `
  type Contact {
    id: String!
    firstName: String
    lastName: String
  }

  type Query {
    contact(id: String!): Contact
    contacts: [Contact]
  }

  type Mutation {
    addContact(id: String!, firstName: String!, lastName: String!): Contact
    updateContact(id: String!, firstName: String!, lastName: String!): Contact
    removeContact(id: String!): Contact
  }
`

const resolvers = {
  Query: {
    contacts: () => contactsDataArray,
    contact: (parent, args) => {
      return find(contactsDataArray, { id: args.id })
    }
  },
  Mutation: {
    addContact: (root, args) => {
      const newContact = {
        id: args.id,
        firstName: args.firstName,
        lastName: args.lastName
      }

      contactsDataArray.push(newContact)

      return newContact
    },
    updateContact: (root, args) => {
      const contact = find(contactsDataArray, { id: args.id })
      if (!contact) {
        throw new Error(`Couldn't find contact with id ${args.id}`)
      }

      contact.firstName = args.firstName
      contact.lastName = args.lastName

      return contact
    },
    removeContact: (root, args) => {
      const removedContact = find(contactsDataArray, { id: args.id })
      if (!removedContact) {
        throw new Error(`Couldn't find contact with id ${args.id}`)
      }

      remove(contactsDataArray, c => {
        return c.id === removedContact.id
      })

      return removedContact
    }
  }
}

export { typeDefs, resolvers }

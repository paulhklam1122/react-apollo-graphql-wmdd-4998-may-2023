import { useQuery } from '@apollo/client'
import { GET_CONTACTS } from '../../queries'
import { List } from 'antd'
import Contact from '../listItems/Contact'

const getStyles = () => ({
  list: {
    display: 'flex',
    justifyContent: 'center'
  }
})

const Contacts = () => {
  const styles = getStyles()

  const { loading, error, data } = useQuery(GET_CONTACTS)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  console.log('data', data)

  return (
    <List grid={{ gutter: 20, column: 1 }} style={styles.list}>
      {data.contacts.map(({ id, firstName, lastName }) => (
        <List.Item key={id}>
          <Contact id={id} firstName={firstName} lastName={lastName} />
        </List.Item>
      ))}
    </List>
  )
}

export default Contacts

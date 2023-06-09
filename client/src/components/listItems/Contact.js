import { Card } from 'antd'
import RemoveContact from '../buttons/RemoveContact'
import { EditOutlined } from '@ant-design/icons'
import { useState } from 'react'
import UpdateContact from '../forms/UpdateContact'

const getStyles = () => ({
  card: {
    width: '500px'
  }
})

const Contact = props => {
  const { id, firstName, lastName } = props
  const styles = getStyles()
  const [editMode, setEditMode] = useState(false)

  const handleButtonClick = () => {
    setEditMode(!editMode)
  }

  return (
    <div>
      {editMode ? (
        <UpdateContact
          id={id}
          firstName={firstName}
          lastName={lastName}
          onButtonClick={handleButtonClick}
        />
      ) : (
        <Card
          style={styles.card}
          actions={[
            <EditOutlined key='edit' onClick={handleButtonClick} />,
            <RemoveContact id={id} firstName={firstName} lastName={lastName} />
          ]}
        >
          {firstName} {lastName}
        </Card>
      )}
    </div>
  )
}

export default Contact

import React from 'react'
import users from './assets/data.json'
import UserList  from './assets/components/UserList'

function App() {
  return (
    <div>

      <UserList users = {users} />
    </div>
  )
}

export default App
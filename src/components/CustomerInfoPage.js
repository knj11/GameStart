import React, { useState, useEffect, useContext } from 'react'
import { fetchAllUsers } from '../api'

import { UserContext } from "./App";

const CustomerInfoPage = () => {
  const { user } = useContext(UserContext);
  const [users, setUsers] = useState(null)

  useEffect(() => {
    fetchAllUsers(user.token).then(allUsers => setUsers(allUsers)).catch(error => console.log('error :>> ', error))
  }, [])

  return (
    <>
      {(users) && users.map(el => <div>{el.firstName}</div>)}
    </>
  )
}

export default CustomerInfoPage
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const UsersPage = () => {

  const [users, setUsers] = useState([]);

  // Ajax (Not recommended) or fetch API from JS, or Axios (npm i axios)
  /* For API call. 
      API URL: https://jsonplaceholder.typicode.com/users
      Http Method: GET
      Http Client: axios
      use a hook called useEffect
  */

  console.log('1. Program Started');
  useEffect(() => {
    // will be called after initial rendering
    // ideal place for api call
    console.log('3. Inside useEffect');
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res.data);
        setUsers(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log('It is over');
      })
  }, []); // dependency list

  console.log('2. Program Ended');

  if (users && users.length === 0) {
    return (
      <div className='alert alert-warning'>No users found</div>
    )
  }

  return (

    <>
      <h1 className="text-center">Users</h1>
      <Link to="/users/add" className='btn btn-primary text-center m-2'>Add User</Link>
      <div className='row'>
        {users.map((user) => {
          return (
            <div className='col-md-4' key={user.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">Phone: {user.phone}</h6>
                  <p className="card-text">E-Mail: {user.email}</p>

                  <Link to={`/users/${user.id}`} className="card-link">View Details</Link>
                </div>
              </div>
            </div>
          )
        })}

      </div>
    </>
  )
}

export default UsersPage

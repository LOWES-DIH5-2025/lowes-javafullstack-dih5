import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const ViewUser = () => {

  const { id } = useParams();
  const [user, setUser] = useState({address: {}});

  useEffect(() => {
    // will be called after initial rendering
    // ideal place for api call
    console.log('3. Inside useEffect');
    axios.get('https://jsonplaceholder.typicode.com/users/' + id)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log('It is over');
      })
  }, []); // dependency list

  return (
    <div>
      <h2 className="text-center">User Details</h2>

      

      <div className='col-md-4' key={user.id}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Phone: {user.phone}</h6>
            <p className="card-text">E-Mail: {user.email}</p>
            <p className="card-text">Address: {user.address.street} {user.address.suite} {user.address.city} {user.address.zipcode}</p>
            <p className="card-text">Website: {user.website}</p>

          </div>
        </div>
      </div>

      <Link to="/users" className='btn btn-primary m-3'>Back</Link>

    </div>
  )
}

export default ViewUser

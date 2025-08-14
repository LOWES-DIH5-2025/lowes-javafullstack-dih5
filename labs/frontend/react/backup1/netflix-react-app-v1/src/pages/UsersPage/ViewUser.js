import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ViewUser = () => {
  return (<div>
      <h2 className="text-center">Show User Details</h2>

      <Link to="/users" className='btn btn-primary m-3'>Back</Link>

    </div>
  )
}

export default ViewUser

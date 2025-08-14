import axios from "axios";
import { useEffect } from "react";

function HomePage() {

  console.log('1. Program Started');

  useEffect(() => {
    // will be called after initial rendering
    // ideal place for api call
    console.log('3. Inside useEffect');
    // let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0MkB0ZXN0LmNvbSIsImlhdCI6MTcxMDc1MjI1NCwiZXhwIjoxNzEwODM4NjU0LCJlIjoidGVzdDJAdGVzdC5jb20iLCJhdSI6WyJST0xFX0FETUlOIl19.6sIOBT6W0Tl_EM1uoOl-vFbcOglip6XEWA5Jy71dAso';
    // axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    // axios.get('http://localhost:8091/accounts')
    axios.get('http://localhost:8111/bankingapp/api/accounts')
      .then((res) => {
        console.log(res.data);
        // setAccounts(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log('It is over');
      })
  }, []); // dependency list

  console.log('2. Program Ended');

    return (
      <div>
          LOGIN SUCCESS!!!
      </div>
    );
  }
  
  export default HomePage;
  
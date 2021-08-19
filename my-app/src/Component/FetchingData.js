import React, { useEffect, useState } from 'react';

const FetchingData = () => {
  const [users, setUsers] = useState([]);
  const fun = async () => {
    const res = await fetch('https://reqres.in/api/users?page=1');
    const json = await res.json();
    setUsers(json.data);
    console.log(json.data);
  };
  useEffect(() => {
    fun();
  }, []);

  return (
    <div className="App">
      <h1>Task 2: Email List from Rest APIs by Get Method!</h1>
      <div>
        {users
          .filter((user) => user.id === 1)
          .map((user) => {
            return (
              <div key={user.id}>
                <p>{user.email}</p>
              </div>
            );
          })}

        {users
          .filter((user) => user.id === 3)
          .map((user) => {
            return (
              <div key={user.id}>
                <p>{user.email}</p>
              </div>
            );
          })}

        {/* Id = 10 is not coming due to page no.2 of API */}
        
        {users
          .filter((user) => user.id === 10)
          .map((user) => {
            return (
              <div key={user.id}>
                <p>{user.email}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FetchingData;

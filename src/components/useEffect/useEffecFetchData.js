import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

function UseEffecFetchData() {
  const [users, setUser] = useState([]);
  const getUsers = async () => {
    const res = await fetch(url);
    const users = await res.json();
    setUser(users);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {users.map((users) => {
          const { id, login, avatar_url, html_url } = users;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default UseEffecFetchData;

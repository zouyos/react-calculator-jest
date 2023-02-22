import { useState } from "react";
import axios from "axios";
export function RandomUser() {
  const [currentUser, setCurrentUser] = useState();

  async function fetchRandomUser() {
    const response = await axios.get("https://randomuser.me/api/");
    setCurrentUser(response.data.results[0]);
  }

  return (
    <>
      <h1>User</h1>
      {currentUser && (
        <>
          <h2>{`${currentUser.name.first} ${currentUser.name.last}`}</h2>
          <img
            src={currentUser.picture.large}
            alt={`${currentUser.name.first} ${currentUser.name.last}`}
          />
          <p>{currentUser.email}</p>
        </>
      )}
      <button onClick={fetchRandomUser}>Load user</button>
    </>
  );
}

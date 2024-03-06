import axios from "axios";
import { useEffect, useState } from "react";

export function RandomUser() {
  const [currentUser, setCurrentUser] = useState();

  async function fetchRandomUser() {
    const { data } = await axios.get("https://randomuser.me/api/");
    setCurrentUser(data.results[0]);
  }

  // useEffect(() => {
  //   fetchRandomUser();
  // }, []);

  return (
    <>
      <h1>User</h1>
      {currentUser && (
        <>
          <h2 data-testid="username">{`${currentUser.name.first} ${currentUser.name.last}`}</h2>
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

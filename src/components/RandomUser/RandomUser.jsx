import { useState } from "react"

export function RandomUser({ }) {
    const [currentUser, setCurrentUser] = useState()


    async function fetchRandomUser() {
        const user = (await (await fetch("https://randomuser.me/api/")).json()).results[0]
        setCurrentUser(user)
    }
    return (
        <>
            {currentUser &&
                <>

                    <h1>{`${currentUser.name.first} ${currentUser.name.last}`}</h1>
                    <img src={currentUser.picture.large} alt={`${currentUser.name.first} ${currentUser.name.last}`} />
                    <p>{currentUser.email}</p>
                </>}
            <button onClick={fetchRandomUser}>Load user</button>
        </>
    )
}
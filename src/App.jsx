import { Counter } from "./components/Counter/Counter"
import { RandomUser } from "./components/RandomUser/RandomUser"

export function App() {

    return (
        <div style={{ height: "90vh", display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <Counter initialValue={0} />
            <RandomUser />
        </div>
    )
}
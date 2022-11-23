import { Button } from "@mui/material"
import { useLocalStorage, useSessionStorage } from "./useStorage"

export default function StorageComponent() {
    const [name, setName, removeName] = useSessionStorage('name', 'Pawel')
    const [age, setAge, removeAge] = useLocalStorage('age', 18)

    return (
        <>
            <div>{name} - {age}</div>
            <Button variant='outlined' style={{ margin: 10, backgroundColor: 'white' }} onClick={() => setName('John')}>Set Name</Button>
            <Button variant='outlined' style={{ margin: 10, backgroundColor: 'white' }} onClick={() => setAge(36)}>Set Age</Button>
            <Button variant='outlined' style={{ margin: 10, backgroundColor: 'white' }} onClick={removeName}>Remove Name</Button>
            <Button variant='outlined' style={{ margin: 10, backgroundColor: 'white' }} onClick={removeAge}>Remove Age</Button>
        </>
    )
}

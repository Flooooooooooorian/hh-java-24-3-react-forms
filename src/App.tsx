import './App.css'
import {ChangeEvent, FormEvent, useState} from "react";

type User = {
    name: string,
    email: string,
    password1: string,
    password2: string
}

function App() {

    const [user, setUser] = useState<User>({name: "", email: "", password1: "", password2: ""})

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [event.target.name]: event.target.value})
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        console.log(user)
    }

    return (
        <form onSubmit={onSubmit}>
            <input value={user.name}
                   onChange={onChange}
                   name={"name"}
                   placeholder={"Name"}/>
            <input value={user.email}
                   onChange={onChange}
                   name={"email"}
                   placeholder={"Email"}/>
            <input value={user.password1}
                   onChange={onChange}
                   name={"password1"}
                   placeholder={"Password"}/>
            <input value={user.password2}
                   onChange={onChange}
                   name={"password2"}
                   placeholder={"Password"}/>
            <button type={"submit"}>Regestrieren</button>
        </form>
    )
}

export default App

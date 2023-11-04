import { FC, useState } from "react"
import '../cssfolder/RegistrationPage.css'

export interface RegistrationPageProps {

}

export const RegistrationPage: FC<RegistrationPageProps> = (props: RegistrationPageProps) => {
    const[email, setEmail] = useState('');
    const[login, setLogin] = useState('');
    const[password, setPassword] = useState('');
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[school, setSchool] = useState('');

    const onSaveUser = (e) => {
        e.preventDefault();
        const createdUser = {email, login, password, firstName, lastName, school}
        console.log(createdUser)
        fetch("http://localhost:8080/user/create", {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:8080/user/create',
                'Access-Control-Request-Method': 'POST',
                'Access-Control-Allow-Headers': 'Content-Type'
            },
            method: "POST",
            body: JSON.stringify(createdUser)
        }).then(() => {
            console.log("Added")
        })
    
        }
    
    


    return(
        <>
            <div>{"Rejestrujemy się za darmo :))"}</div>
            
                <fieldset className="form">
                        <div><label>e-mail</label><input type="email" value={email} 
                        onChange={(e) => setEmail(e.target.value)} required /> <br /></div>


                        <div><label>login</label><input type="text" value={login}
                         onChange={(e) => setLogin(e.target.value)} required/> <br /></div>

                        <div><label>hasło</label><input type="password" value={password}
                        onChange={(e) => setPassword(e.target.value)} required /> <br /></div>

                        <div><label>Imię</label><input type="text" value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} required /> <br /></div>

                        <div><label>Nazwisko</label><input type="text" value={lastName}
                        onChange={(e) => setLastName(e.target.value)} required /> <br /></div>

                        <div><label>Szkoła</label><input type="text" value={school}
                        onChange={(e) => setSchool(e.target.value)} required /> <br /></div>

                    <button type="submit" onClick={onSaveUser}>Zarejestruj się</button>

                    </fieldset>
            
        </>
    )
}
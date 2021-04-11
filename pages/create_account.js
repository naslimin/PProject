//import styles from '../styles/createaccount.css'
//import { useEffect } from 'react';
import firebase from 'firebase/app';
import { useState, useEffect } from 'react';
import firestore from '../../src/firebase/firebase.js';


const CreateAccount = () => {

    useEffect(() => {
        firebase.firestore().collection('users').get().then(snapshot => {
            snapshot.forEach((res) => {
                console.log(res.data())
            })
        })
        console.log('test')
    }, [])

    const [Name, setName] = useState(" ");
    const [Surname, setSurname] = useState(" ");
    const [Email, setEmail] = useState(" ");
    const [Password, setPassword] = useState(" ");
    const [ConfirmPassword, setConfirmPassword] = useState(" ");
    const addUserHandler = (obj) => {
        const ref = firestore.collection("users");
        ref
            .add(obj)
            .then(() => {
                console.log("add successfully");
            })
            .catch((err) => console.log(err));
    };

    const submitHandler = (e) => {
        e.preventDefult();
        const obj = {
            Name: Name,
            Suename: Suename,
            Email: Email,
            Password: Password,
            ConfirmPassword: ConfirmPassword,
        };
        setName(" ");
        setSurname(" ");
        setEmail(" ");
        setPassword(" ");
        setConfirmPassword(" ");
        addUserHandler(obj);
    };

    return (<div>
        <div style={{ width: "80%", marginLeft: 20 }}>
            <form onSubmit={submitHandler}>
                <div>Register</div>
                <p> </p>
                <input type="text"
                    name="name"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)} />

                <p> </p>
                <input type="text"
                    name="surname"
                    placeholder="Surname"
                    onChange={(e) => setSurname(e.target.value)} />

                <p> </p>
                <input type="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)} />

                <p> </p>
                <input type="password"
                    name="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} />

                <p> </p>
                <input type="password"
                    name="confirm password"
                    placeholder="Confirm password"
                    onChange={(e) => setConfirmPassword(e.target.value)} />
                <br />
                <br />
                <button>Register</button>
            </form>
        </div>
    </div>
    );
}
export default CreateAccount;


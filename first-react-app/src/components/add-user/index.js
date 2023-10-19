import './style.css';
import {useDataStorageContext} from "../context/data-storage-context";
import {useState} from "react";
import Users from "../users";

const AddUser = () => {
    const {dispatch, dataActions} = useDataStorageContext();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(18);
    const [info, setInfo] = useState('');

    const handleFirstNameChange = event => {
        setFirstName(event.target.value);
    }

    const handleLastNameChange = event => {
        setLastName(event.target.value);
    }

    const handleAgeChange = event => {
        const age = +event.target.value;
        if (!isNaN(age)) {
            setAge(age);
        }
    }

    const handleInfoChange = event => {
        setInfo(event.target.value);
    }

    const addUser = () => {
        const user = {firstName, lastName, age, info};
        dispatch(dataActions.addUser(user));
    }

    return (
        <>
            <h1>Add User</h1>
            <div className='add-user'>
                <label>First name:</label><input type='text' value={firstName} onChange={handleFirstNameChange} />
                <label>Last name:</label><input type='text'  value={lastName} onChange={handleLastNameChange} />
                <label>Age:</label><input type='text'  value={age} onChange={handleAgeChange} />
                <label>Info:</label><input type='text'  value={info} onChange={handleInfoChange} />
                <button onClick={addUser} >Add User</button>
            </div>
            <Users />
        </>
    )
}

export default AddUser;
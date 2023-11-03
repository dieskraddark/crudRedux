import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/actions';

export default function AddUser() {

    let navigate = useNavigate();
    let dispatch = useDispatch();
    let goBack = () => {
        navigate('/')
    }
    const [state, setState] = useState({
        name: "",
        age: "",
        grade: "",
    });

    const [error, setError] = useState("");
    const { name, age, grade } = state;

    const handleInputChnage = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !age || !grade) {
            setError("please fill out the input fields ");
            setTimeout(() => {
                setError(null);
            }, 1800);
        } else {
            dispatch(addUser(state));
            goBack();
            setError("");
        }
    }

    return (
        <div className='second'>
            {error && <h3 className='second-header'>{error}</h3>}
            <form onSubmit={handleSubmit}>
                <label for="fname">Name</label>
                <input type="text" id="fname" value={name} name="name" onChange={handleInputChnage} placeholder="Your name.." />
                <label for="Age">Age</label>
                <input type="number" id="Age" name="age" value={age} onChange={handleInputChnage} placeholder="Your Age.." />
                <label for="Grade">Grade</label>
                <input type="text" id="grade" name="grade" value={grade} onChange={handleInputChnage} placeholder="Your Grade.." />
                <button className="add-user" type='submit'>Add User</button><button className="go-back" onClick={goBack}>Go Back</button>
            </form>
        </div>
    )
}

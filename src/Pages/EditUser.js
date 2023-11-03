import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, getSingleUser, updateUser } from '../redux/actions';

export default function EditUser() {

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
    let { id } = useParams();
    const { user } = useSelector((state) => state.data);
    const { name, age, grade } = state;

    const handleInputChnage = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });

    }
    useEffect(() => {
        dispatch(getSingleUser(id))
    }, []);
    useEffect(() => {
        if (user) {
            setState({ ...user })
        }
    }, [user]);



    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !age || !grade) {
            setError("please fill out the input fields ");
            setTimeout(() => {
                setError(null);
            }, 19000);
        } else {
            dispatch(updateUser(state ,id));
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
                <button className="add-user" type='submit'>Update User</button><button className="go-back" onClick={goBack}>Go Back</button>
            </form>
        </div>
    )
}

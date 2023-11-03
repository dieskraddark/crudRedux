import { useEffect } from 'react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteUser, loadUsers } from '../redux/actions';
import { useNavigate } from "react-router-dom";

const Home = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const { users } = useSelector(state => state.data)

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  const handleButtonClick = () => {
    navigate('/addUser')
  }
 

  const handleDelete = (id) => {
    if (window.confirm("Are You sure You want to delete")) {
      dispatch(DeleteUser(id))
    }
  } 
  return (
    <div className='container'>
      <h1 className='emp'>Student Data</h1>
      <table id='customers'>
        <thead>
          <tr>
            <th>NAME</th>
            <th>AGE</th>
            <th>GRADE</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.grade}</td>
                <td><button className="edit-button" onClick={()=> navigate(`/editUser/${user.id}`)} >Edit</button>
                  <button className="delete-button" onClick={() => handleDelete(user.id)} >Delete</button></td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="add">
        <button className="add-button" onClick={handleButtonClick}>Add User</button>
      </div>
    </div>
  );
};

export default Home

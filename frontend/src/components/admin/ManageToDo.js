import React, { useEffect } from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import app_config from '../../config';

const ManageToDo = () => {

    const [todoList, setTodoList] = useState([]);
    const url = app_config.apiurl;
    const getDataFromBackend = async () => {
        // send request 
        const res= await fetch(url+'/todo/getall');

        // accessing data from response
        const data = await res.json();

        console.log(data);
        setTodoList(data.result);

    };

    useEffect(() => {
     
        getDataFromBackend();

    }, []);
    
    const deleteUser = async (id) => {
        console.log(id);
        const res = await fetch(url+'/todo/getall'+id, {
            method : 'DELETE'
        })

        if(res.status===200){
            getDataFromBackend();
            toast.success('ToDo Deleted Successfully!!');
        }
    }

  return (
    <div>
        <header className='py-5'>
            <div className="container">
                <h1 className='display-3 fw-bold  text-center' style={{color:"#5f8b5f"}}>Manage ToDo Data</h1>
            </div>
        </header>

        <div className='container mt-4'>

        <table class="table table-striped table-hover">
                <thead >
                    <tr style={{backgroundColor:"#5f8b5f", color:"white"}}>
                         <th></th>
                         {/*change according to the todopage*/}
                        <th>UserName</th>
                        <th>ToDo Category</th>
                        <th>ToDo Title</th>
                        <th>Todo Description</th>
                        <th>ToDo Date</th>
                        <th>Created_At</th>
                        <th>Added_At</th>
                        <th>Updated_At</th>
                    </tr>
                </thead>
                <tbody style={{backgroundColor:"white"}}>
                    {
                        todoList.map( (user) => (
                            <tr >
                        {/*change according to the todopage*/}
                        <td>{user.name}</td>
                        <td>{user.category}</td>
                        <td>{user.title}</td>
                        <td>{user.description}</td>
                        <td>{new Date(user.created_at).toLocaleDateString()}</td>
                        <td>{new Date(user.updated_at).toLocaleDateString()}</td>
                                <td>
                                    <button className='btn btn-dark' style={{backgroundColor:"#5f8b5f"}} onClick={() => deleteUser(user._id)}> <i style={{color:"white"}} class="fas fa-trash"></i></button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>


    </div>
  )
}

export default ManageToDo;
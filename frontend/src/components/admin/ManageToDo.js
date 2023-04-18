import React, { useEffect } from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import app_config from '../../config';

const ManageToDo = () => {

    const [todoList, setTodoList] = useState([]);
    const url = app_config.apiurl;
    const getDataFromBackend = async () => {
        // send request 
        const res= await fetch(url+'/todolist/getall');

        // accessing data from response
        const data = await res.json();

        console.log(data);
        setTodoList(data.result);

    };

    useEffect(() => {
     
        getDataFromBackend();

    }, []);
    
    const deleteTodo = async (id) => {
        console.log(id);
        const res = await fetch(url+'/todolist/delete/'+id, {
            method : 'DELETE'
        })

        if(res.status===200){
            getDataFromBackend();
            toast.success('ToDo Data Deleted Successfully!!');
        }
    }

  return (
    <div>
        <header className='py-3'>
            <div className="container">
                <h4 className='display-4 fw-thin  text-center' style={{color:"#5f8b5f"}}>Manage ToDo Data</h4>
            </div>
        </header>

        <div className='container mt-3'>

        <table class="table table-striped table-hover">
                <thead >
                    <tr style={{backgroundColor:"#5f8b5f", color:"white"}}>
                        {/*change according to the todopage*/}
                        <th>ToDo Title</th>
                        <th>Created_At</th>
                        <th>Updated_At</th>
                    </tr>
                </thead>
                <tbody style={{backgroundColor:"white"}}>
                    {
                        todoList.map( (todo) => (
                            <tr >
                        <td>{todo.title}</td>
                        <td>{new Date(todo.created_at).toLocaleDateString()}</td>
                        <td>{new Date(todo.updated_at).toLocaleDateString()}</td>
                                <td>
                                    <button className='btn btn-dark' style={{backgroundColor:"#5f8b5f"}} onClick={() => deleteTodo(todo._id)}> <i style={{color:"white"}} class="fas fa-trash"></i></button>
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
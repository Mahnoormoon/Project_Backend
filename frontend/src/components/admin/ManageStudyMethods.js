import React, { useEffect } from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import app_config from '../../config';
const ManageStudyMethods = () => {

    const [studymethodList, setStudymethodList] = useState([]);
    const url = app_config.apiurl;
    const getDataFromBackend = async () => {
        // send request 
        const res= await fetch(url+'/study/getall');

        // accessing data from response
        const data = await res.json();

        console.log(data);
        setStudymethodList(data.result);

    };

    useEffect(() => {
     
        getDataFromBackend();

    }, []);
    
    const deleteUser = async (id) => {
        console.log(id);
        const res = await fetch(url+'/study/getall'+id, {
            method : 'DELETE'
        })

        if(res.status===200){
            getDataFromBackend();
            toast.success('Study Method Deleted Successfully!!');
        }
    }

  return (
    <div>
        <header className='py-5'>
            <div className="container">
                <h1 className='display-3 fw-bold  text-center' style={{color:"#5f8b5f"}}>Manage Study Methods Data</h1>
            </div>
        </header>

        <div className='container mt-4'>

        <table class="table table-striped table-hover">
                <thead >
                    <tr style={{backgroundColor:"#5f8b5f", color:"white"}}>
                         <th></th>
                        <th>Study Method Name</th>
                        <th>Full Description</th>
                        <th>Study Method Credits</th>
                        <th>Created_At</th>
                        <th>Updated_At</th>
                    </tr>
                </thead>
                <tbody style={{backgroundColor:"white"}}>
                    {
                        studymethodList.map( (user) => (
                            <tr >
                        <td>{user.sname}</td>
                        <td>{user.sdescription}</td>
                        <td>{user.scredits}</td>
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

export default ManageStudyMethods;
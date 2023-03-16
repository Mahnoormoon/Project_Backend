import React, { useEffect } from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import app_config from '../../config';

const ManageUserProfile = () => {

    const [userprofileList, setUserprofileList] = useState([]);
    const url = app_config.apiurl;

    const getDataFromBackend = async () => {
        // send request 
        const res= await fetch(url+'/userprofile/getall');

        // accessing data from response
        const data = await res.json();

        console.log(data);
        setUserprofileList(data.result);

    };

    useEffect(() => {
     
        getDataFromBackend();

    }, []);
    
    const deleteUserProfile = async (id) => {
        console.log(id);
        const res = await fetch(url+'/userprofile/getall'+id, {
            method : 'DELETE'
        })

        if(res.status===200){
            getDataFromBackend();
            toast.success('User Deleted Successfully!!');
        }
    }

  return (
    <div>
        <header className='py-5'>
            <div className="container">
                <h1 className='display-3 fw-bold  text-center' style={{color:"#5f8b5f"}}>Manage User Profile Data</h1>
            </div>
        </header>

        <div className='container mt-4'>

        <table class="table table-striped table-hover">
                <thead >
                    <tr style={{backgroundColor:"#5f8b5f", color:"white"}}>
                         <th></th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Description/Bio</th>
                        <th>Contact</th>
                        <th>Header</th>
                        <th>Profile Image</th>
                        <td>Created_at</td>
                        <td>Updated_at</td>
                    </tr>
                </thead>
                <tbody style={{backgroundColor:"white"}}>
                    {
                        userprofileList.map( (userprofile) => (
                            <tr >
                        <td>{userprofile.pusername}</td>
                        <td>{userprofile.pemail}</td>
                        <td>{userprofile.pdescription}</td>
                        <td>{userprofile.pcontact}</td>
                        <td>{userprofile.pheader}</td>
                        <td>{userprofile.pimage}</td>
                        <td>{new Date(userprofile.created_at).toLocaleDateString()}</td>
                        <td>{new Date(userprofile.updated_at).toLocaleDateString()}</td>
                                <td>
                                    <button className='btn btn-dark' style={{backgroundColor:"#5f8b5f"}} onClick={() => deleteUserProfile(userprofile._id)}> <i style={{color:"white"}} class="fas fa-trash"></i></button>
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

export default ManageUserProfile;
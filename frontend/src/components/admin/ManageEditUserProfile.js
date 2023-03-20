import React, { useEffect } from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import app_config from '../../config';

const ManageEditUserProfile = () => {

    const [edituserprofileList, setEdituserprofileList] = useState([]);
    const url = app_config.apiurl;

    const getDataFromBackend = async () => {
        // send request 
        const res= await fetch(url+'/edituserprofile/getall');

        // accessing data from response
        const data = await res.json();

        console.log(data);
        setEdituserprofileList(data.result);

    };

    useEffect(() => {
     
        getDataFromBackend();

    }, []);
    
    const deleteEdituserProfile = async (id) => {
        console.log(id);
        const res = await fetch(url+'/edituserprofile/getall'+id, {
            method : 'DELETE'
        })

        if(res.status===200){
            getDataFromBackend();
            toast.success('Edited User Profile Deleted Successfully!!');
        }
    }

  return (
    <div>
        <header className='py-5'>
            <div className="container">
                <h1 className='display-3 fw-bold  text-center' style={{color:"#5f8b5f"}}>Manage Edit User Profile Data</h1>
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
                        edituserprofileList.map( (edituserprofile) => (
                            <tr >
                        <td>{edituserprofile.pusername}</td>
                        <td>{edituserprofile.pemail}</td>
                        <td>{edituserprofile.pdescription}</td>
                        <td>{edituserprofile.pcontact}</td>
                        <td>{edituserprofile.pheader}</td>
                        <td>{edituserprofile.pimage}</td>
                        <td>{new Date(edituserprofile.edited_at).toLocaleDateString()}</td>
                        <td>{new Date(edituserprofile.updated_at).toLocaleDateString()}</td>
                                <td>
                                    <button className='btn btn-dark' style={{backgroundColor:"#5f8b5f"}} onClick={() => deleteEdituserProfile(edituserprofile._id)}> <i style={{color:"white"}} class="fas fa-trash"></i></button>
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

export default ManageEditUserProfile;
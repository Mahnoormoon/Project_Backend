import React, { useEffect } from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import app_config from '../../config';
const ManageContact = () => {

    const [contactList, setContactList] = useState([]);
    const url = app_config.apiurl;
    const getDataFromBackend = async () => {
        // send request 
        const res= await fetch(url+'/contact/getall');

        // accessing data from response
        const data = await res.json();

        console.log(data);
        setContactList(data.result);

    };

    useEffect(() => {
     
        getDataFromBackend();

    }, []);
    
    const deleteContact = async (id) => {
        console.log(id);
        const res = await fetch(url+'/contact/delete'+id, {
            method : 'DELETE'
        })

        if(res.status===200){
            getDataFromBackend();
            toast.success('Contact Data Deleted Successfully!!');
        }
    }

  return (
    <div>
        <header className='py-3'>
            <div className="container">
                <h4 className='display-4 fw-thin  text-center' style={{color:"#5f8b5f"}}>Manage Contact Data</h4>
            </div>
        </header>

        <div className='container mt-3'>

        <table class="table table-striped table-hover">
                <thead >
                    <tr style={{backgroundColor:"#5f8b5f", color:"white"}}>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Added_At</th>
                        <th>Updated_At</th>
                    </tr>
                </thead>
                <tbody style={{backgroundColor:"white"}}>
                    {
                        contactList.map( (contact) => (
                            <tr >
                        <td>{contact.cname}</td>
                        <td>{contact.cemail}</td>
                        <td>{contact.cmessage}</td>
                        <td>{new Date(contact.added_at).toLocaleDateString()}</td>
                        <td>{new Date(contact.updated_at).toLocaleDateString()}</td>
                                <td>
                                    <button className='btn btn-dark' style={{backgroundColor:"#5f8b5f"}} onClick={() => deleteContact(contact._id)}> <i style={{color:"white"}} class="fas fa-trash"></i></button>
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

export default ManageContact;
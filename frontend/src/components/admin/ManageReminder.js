import React, { useEffect } from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import app_config from '../../config';
const ManageReminder = () => {

    const [reminderList, setReminderList] = useState([]);
    const url = app_config.apiurl;
    const getDataFromBackend = async () => {
        // send request 
        const res= await fetch(url+'/reminder/getall');

        // accessing data from response
        const data = await res.json();

        console.log(data);
        setReminderList(data.result);

    };

    useEffect(() => {
     
        getDataFromBackend();

    }, []);
    
    const deleteReminder = async (id) => {
        console.log(id);
        const res = await fetch(url+'/reminder/getall'+id, {
            method : 'DELETE'
        })

        if(res.status===200){
            getDataFromBackend();
            toast.success('Reminder Data Deleted Successfully!!');
        }
    }

  return (
    <div>
        <header className='py-3'>
            <div className="container">
                <h4 className='display-4 fw-thin  text-center' style={{color:"#5f8b5f"}}>Manage Reminders Data</h4>
            </div>
        </header>

        <div className='container mt-3'>

        <table class="table table-striped table-hover">
                <thead >
                    <tr style={{backgroundColor:"#5f8b5f", color:"white"}}>
                        {/*change according to the reminderpage*/}
                        <th>Reminder Name</th>
                        <th>Reminder Time</th>
                        <th>Reminder Date</th>
                        <th>Created_At</th>
                        <th>Updated_At</th>
                    </tr>
                </thead>
                <tbody style={{backgroundColor:"white"}}>
                    {
                        reminderList.map( (reminder) => (
                            <tr >
                        {/*change according to the reminderpage*/}
                        <td>{reminder.rname}</td>
                        <td>{reminder.rtime}</td>
                        <td>{reminder.rdate}</td>
                        <td>{new Date(reminder.created_at).toLocaleDateString()}</td>
                        <td>{new Date(reminder.updated_at).toLocaleDateString()}</td>
                                <td>
                                    <button className='btn btn-dark' style={{backgroundColor:"#5f8b5f"}} onClick={() => deleteReminder(reminder._id)}> <i style={{color:"white"}} class="fas fa-trash"></i></button>
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

export default ManageReminder;
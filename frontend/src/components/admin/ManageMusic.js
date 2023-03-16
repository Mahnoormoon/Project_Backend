import React, { useEffect } from 'react'
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import app_config from '../../config';

const ManageMusic = () => {

    const [musiclistenList, setMusiclistenList] = useState([]);
    const url = app_config.apiurl;

    const getDataFromBackend = async () => {
        // send request 
        const res= await fetch(url+'/music/getall');

        // accessing data from response
        const data = await res.json();

        console.log(data);
        setMusiclistenList(data.result);

    };

    useEffect(() => {
     
        getDataFromBackend();

    }, []);
    
    const deleteMusic = async (id) => {
        console.log(id);
        const res = await fetch(url+'/music/getall'+id, {
            method : 'DELETE'
        })

        if(res.status===200){
            getDataFromBackend();
            toast.success('Music Data Deleted Successfully!!');
        }
    }

  return (
    <div>
        <header className='py-5'>
            <div className="container">
                <h1 className='display-3 fw-bold  text-center' style={{color:"#5f8b5f"}}>Manage All Music Data</h1>
            </div>
        </header>

        <div className='container mt-4'>

        <table class="table table-striped table-hover">
                <thead >
                    <tr style={{backgroundColor:"#5f8b5f", color:"white"}}>
                         <th></th>
                        <th>Music Title</th>
                        <th>Artist Name</th>
                        <th>Music Credits</th>
                        <th>Audio File</th>
                        <th>Image</th>
                        <th>Added_At</th>
                        <th>Updated_At</th>
                    </tr>
                </thead>
                <tbody style={{backgroundColor:"white"}}>
                    {
                        musiclistenList.map( (music) => (
                            <tr >
                        <td>{music.mtitle}</td>
                        <td>{music.aname}</td>
                        <td>{music.mcredits}</td>
                        <td>{music.maudio}</td>
                        <td>{music.mimage}</td>
                        <td>{new Date(music.created_at).toLocaleDateString()}</td>
                        <td>{new Date(music.updated_at).toLocaleDateString()}</td>
                                <td>
                                    <button className='btn btn-dark' style={{backgroundColor:"#5f8b5f"}} onClick={() => deleteMusic(music._id)}> <i style={{color:"white"}} class="fas fa-trash"></i></button>
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

export default ManageMusic;
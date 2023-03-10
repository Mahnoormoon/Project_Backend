import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import app_config from '../../config';

const ListStudyMethods = () => {

    const [methodList, setMethodList] = useState([]);
    const url = app_config.apiurl;

    const getDataFromBackend = async () => {
        // send request 
        const res= await fetch(url+'/study/getall');

        // accessing data from response
        const data = (await res.json()).result;

        console.log(data);
        setMethodList(data);

    };

    useEffect(() => {
     
        getDataFromBackend();

    }, []);

    const displayStudy = () => {
        return methodList.map((method) => (
            <div className='col-md-3'>
                <div className="card">
                    <div className="card-body">
                        <h4>{method.stitle}</h4>
                        <Link className='btn btn-primary' to={'/main/studymethod/'+method._id}>View</Link>
                    </div>
                </div>
            </div>
        ))
    }

  return (
    <div>
        <div></div>
        <div className='container'>
            <div className="row">
                {displayStudy()}
            </div>
        </div>
    </div>
  )
}

export default ListStudyMethods
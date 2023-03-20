import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import app_config from '../../config';

const ListStudyMethods = () => {

    const [studymethodList, setStudymethodList] = useState([]);
    const url = app_config.apiurl;

    const getDataFromBackend = async () => {
        // send request 
        const res = await fetch(url + '/study/getall');

        // accessing data from response
        const data = (await res.json()).result;

        console.log(data);
        setStudymethodList(data);

    };

    useEffect(() => {

        getDataFromBackend();

    }, );

    const displayStudy = () => {
        return studymethodList.map((method) => (
            <div className="container py-3 px-3 d-flex align-items-center">
                <div
                    className="card py-3 px-3 align-items-center"
                    style={{ width: "20rem", height: "10rem"}}
                >
                    <h4 className="heading1">{method.stitle}</h4>
                    <Link className='btn btn2' to={'/main/studymethod/' + method._id}>View</Link>
                </div>
            </div>
        ))
    }
    return (
        <div>
            <div></div>
            <div className='containerr'>
                <div className="column">
                    {displayStudy()}
                </div>
            </div>
        </div>
    )
}

export default ListStudyMethods
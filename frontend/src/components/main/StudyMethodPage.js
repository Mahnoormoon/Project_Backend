import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import app_config from '../../config';

const StudyMethodPage = () => {

    const {id} = useParams();
    const url = app_config.apiurl;
    const [studyMethodData, setStudyMethodData] = useState(null);
    const [loading, setLoading] = useState(false);

    // console.log(id);

    const fetchStudyMethod = async () => {
        setLoading(true);
        const res = await fetch(url+'/study/getbyid/'+id);
        const data = (await res.json()).result;
        setStudyMethodData(data);
        setLoading(false);
    }

    useEffect(() => {
      fetchStudyMethod();
    }, [])
    

    const showStudyMethod = () => {
        if(!loading && studyMethodData){
            return <div className='container'>
                {studyMethodData.stitle}
            </div>
        }else{
            <h1>Loading ... </h1>
        }
    }

  return (
    <div>
        {showStudyMethod()}
    </div>
  )
}

export default StudyMethodPage
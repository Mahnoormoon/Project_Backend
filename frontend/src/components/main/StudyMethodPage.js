import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import app_config from '../../config';

const StudyMethodPage = () => {

    const {id} = useParams();
    const url = app_config.apiurl;
    const [studyMethodData, setStudyMethodData] = useState(null);
    const [loading, setLoading] = useState(false);

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
    const showStudyMethodCredits = () => {
      if(!loading && studyMethodData){
          return <div className='container'>
              {studyMethodData.scredits}
          </div>
      }else{
          <h1>Loading ... </h1>
      }
  }
    const showStudyMethodDescription = () => {
        if(!loading && studyMethodData){
            return <div className='container'>
                {studyMethodData.sdescription}
            </div>
        }else{
            <h1>Loading ... </h1>
        }
    }

  return (
    <div className="containerr py-3">
    <div className="container py-3 d-flex justify-content-center align-items-center">
      <div
        className="card py-3 justify-content-center align-items-center"
        style={{ width: "200rem" }}
      >
        <h4 className="heading1">{showStudyMethod()}</h4>
        <h6 className="heading1 mt-2">{showStudyMethodCredits()}</h6>
        <div className="form-outline px-4 py-4 mb-2">
          {showStudyMethodDescription()}
        </div>
      </div>
    </div>
  </div>
    
  )
}

export default StudyMethodPage
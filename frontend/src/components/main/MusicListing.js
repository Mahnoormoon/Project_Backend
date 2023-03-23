import React, { useEffect, useState } from 'react'
import app_config from '../../config';
import Musicbg from"./musiclistbg.jpg";

const MusicListing = () => {

    const [musicList, setMusicList] = useState([]);
    const url = app_config.apiurl;

    const getDataFromBackend = async () => {
        // send request 
        const res= await fetch(url+'/music/getall');

        // accessing data from response
        const musicdata = (await res.json()).result;

        console.log(musicdata);
        setMusicList(musicdata);

    };

    useEffect(() => {
     
        getDataFromBackend();

    }, []);

    const displayMusic = () => {
        return musicList.map((music) => (
            <li className="list-group-item d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <img
                                src={ url+'/'+music.mimage}
                                alt=""
                                style={{ width: 45, height: 45 }}
                                className="square"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">{music.aname}</p>
                                <p className="text-muted mb-0">Music Title</p>
                            </div>
                        </div>
                            <audio style={{width: '60%'}} src={url+'/'+music.maudio} controls></audio>
                    </li>
        ))
    }
    return (
        <header>
            <div
                className="p-1 text-center bg-image"
                style={{height:400}}
            >
                <img src={Musicbg}></img>
                <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-white">
                            <h1 className="mb-3">Listen ToDoCafe' Study Music</h1>
                            <h4 className="mb-3">&</h4>
                            <h4 className="mb-3">make your studies more soothing and enjoyable</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <ul className="list-group list-group-light">
                    {displayMusic()}
                </ul>
            </div>
        </header>
    )
}
export default MusicListing
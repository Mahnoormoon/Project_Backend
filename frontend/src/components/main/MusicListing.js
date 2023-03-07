import React, { useEffect, useState } from 'react'
import app_config from '../../config';

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
                                className="rounded-circle"
                            />
                            <div className="ms-3">
                                <p className="fw-bold mb-1">Artist Name</p>
                                <p className="text-muted mb-0">Music Title</p>
                            </div>
                        </div>
                            <audio style={{width: '60%'}} src={url+'/'+music.maudio} controls></audio>
                        <a className="btn btn-link btn-rounded btn-sm" href="#" role="button">
                            Play
                        </a>
                    </li>
        ))
    }

    return (
        <header>
            <div
                className="p-5 text-center bg-image"
                style={{
                    backgroundImage:
                        'url("https://mdbcdn.b-cdn.net/img/new/slides/041.webp")',
                    height: 400
                }}
            >
                <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div className="text-white">
                            <h1 className="mb-3">Listen ToDoCafe' Study Music</h1>
                            <h4 className="mb-3">&</h4>
                            <h4 className="mb-3">make your studies more soothing and enjoyable</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ul className="list-group list-group-light">
                    {displayMusic()}
                </ul>
            </div>
        </header>
    )
}
export default MusicListing
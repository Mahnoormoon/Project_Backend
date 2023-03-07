import React from 'react'

const MusicPlayer = () => {
    return (
        <div className="container text-center">
            <div className="container py-5">
                <div className="card py-3 align-items-center" style={{ width: "20rem" }}>
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
                        className="rounded-circle"
                        style={{ width: 180, height: 180 }}
                        alt="Music Cover Image"
                    />
                    <div className="card-body">
                        <p className="">
                            Music Title
                        </p>
                        <p className="">
                            Artist Name
                        </p>
                    </div>
                    <div className="text-center">
                        <div>
                        <audio style={{width: '150%'}} src={''} controls></audio>
                        </div>
                        <br></br>
                        <a
                            className="btn text-white btn-lg btn-floating"
                            style={{ backgroundColor: "rgb(95, 139, 95)" }}
                            href="#!"
                            role="button"
                        >
                            <i class="fas fa-backward    "></i>
                        </a>
                        &nbsp;&nbsp;<a
                            className="btn text-white btn-lg btn-floating"
                            style={{ backgroundColor: "rgb(95, 139, 95)" }}
                            href="#!"
                            role="button"
                        >
                            <i class="fas fa-play    "></i>
                        </a>
                        &nbsp;&nbsp;<a
                            className="btn text-white btn-lg btn-floating"
                            style={{ backgroundColor: "rgb(95, 139, 95)" }}
                            href="#!"
                            role="button"
                        >
                            <i class="fas fa-forward    "></i>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MusicPlayer
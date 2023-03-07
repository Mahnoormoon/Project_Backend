import React from 'react'

const MusicPlayer = () => {
    return (
        <div className="container d-flex mx-auto align-items-center">
            <div className="container py-5 text-center mx-auto">
                <div className="card py-3 align-items-center" style={{ width: "20rem" }}>
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
                        className="rounded-circle"
                        style={{ width: 180, height: 180 }}
                        alt="Music Cover Image"
                    />
                    <div className="card-body align-center">
                        <p className="card-text-center">
                            Music Title
                        </p>
                        <p className="card-text-center">
                            Artist Name
                        </p>
                    </div>
                    <div className="mt-0 align-center">
                        <div className="progress">
                            <div
                                className="progress-bar bg-success"
                                role="progressbar"
                                style={{ width: "55%" }}
                                aria-valuenow={75}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            />
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
import React from 'react'

export default function Breadcrum({ title, description }) {
    return (
        <>
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-2" style={{ maxWidth: '900px' }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">{title}</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                    <p className="text-white mb-0 wow fadeInDown mb-4" data-wow-delay="0.5s">{description}</p>
                        <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li className="breadcrumb-item active text-primary">{title}</li>
                    </ol>
                </div>
            </div>
        </>
    )
}

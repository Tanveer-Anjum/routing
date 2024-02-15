import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                             development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            we make different types of software  and  website also make sure the qaulity of software 
                            if we want to make website visit our website and read every conditon carefuly 
                            we maked website like <br />
                            Cosmatic Website
                            <br />
                            Library Management
                          
                        </p>
                        <p className="mt-4 text-gray-600">
                           We have proper team who proper manage everything about website 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
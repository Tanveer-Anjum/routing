import React from 'react'
import { useParams } from 'react-router-dom';

function User() {
    const {userid} = useParams()
    return (
        <>
           <div className='h-20 w-100 py-12 justify-center text-center bg-slate-600 font-large text-white'>user</div>
        <div  className='h-20 w-100 py-12 justify-center text-center bg-slate-600 font-large text-white'>Here show your User Id:{userid}</div>
        </>
    )
}

export default User

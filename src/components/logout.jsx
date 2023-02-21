import React, { useEffect } from 'react'

const Logout = () => {
    useEffect(()=>{
        localStorage.removeItem("email");
        window.location.href="/";
    })
    return (
        <></>
    )
}

export default Logout

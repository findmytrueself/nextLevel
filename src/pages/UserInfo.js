import React, {useState,useEffect}from 'react'
import axios from 'axios'
const UserInfo = ({jwt}) => {
    useEffect(() => {
        const requestUser = async() => {
            const res = await axios.get("http://192.168.0.133:1338/v1/test/me",{headers:{Authorization:`Bearer ${jwt}`}})
            console.log(res)
        }
        requestUser();
    },[])
    return (
        <div>
            
        </div>
    )
}

export default UserInfo

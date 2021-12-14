import axios from 'axios'
import React,{useState, useEffect} from 'react'

const Detail = () => {
    useEffect(() => {
        const myData = async() => {
            const res = await axios.get("http://192.168.0.133:1338/v1/test/me",{withCredentials:true})
            console.log(res)
        }
        myData()
    },[])
    return (
        <div>
            
        </div>
    )
}

export default Detail

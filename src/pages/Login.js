/** @jsxImportSource @emotion/react */
import React,{useState,useEffect} from 'react'
// import { css } from "@emotion/react"
import styled from "@emotion/styled"
import axios from "axios"
import { Cookies } from "react-cookie"

const Login = ({cookie, cookieStateHandler}) => {
    const [identifier, setId] = useState("fetest@pixel.sc");
    const [password, setPassword] = useState("pixel!@34");
    const [isLogin, setIsLogin] = useState(false);
    const [data , setData] = useState(null)
  
    
    const cookies = new Cookies();

    const setCookie = () => {
    return cookies.set(identifier,data.data.jwt);
  } 

    const getCookie = () => {
    return cookies.get(identifier);
  }
  
    console.log(data)
    useEffect(() => {
        if(isLogin){ // 로그인 요청 시 데이터 상태 저장
            const fetchData = async() => {
                const res = await axios.post("http://192.168.0.133:1338/v1/test/auth/local",{identifier,password})
                setData(res)
            } 
            fetchData();
            setIsLogin(false);
        }
    },[isLogin])

    useEffect(() => {
        if(data){ //로그인 요청 후 데이터가 들어오면 cookie에 담아줌
           setCookie(identifier,data.data.jwt,{expires:"7d", secure:true, httpOnly:true, sameSite:"none"}) 
           cookieStateHandler(cookies, getCookie, identifier)
        } else {
            window.alert('email,password를 확인해주세요')
            setIsLogin(false)
        }
    },[data,isLogin])
    return (
        <Container>
            <Logo src="img/symbol_logo.png"/>
            <LoginDiv>로그인</LoginDiv>
            <IdPassword >ID</IdPassword>
            <InputType  type="text" placeholder='아이디를 입력해주세요(email)' onChange={(e)=>setId(e.target.value)}/>
            <IdPassword>Password</IdPassword>
            <InputType type="text" placeholder='비밀번호를 입력해주세요' onChange={(e)=>setPassword(e.target.value)}/>
            <LoginButton onClick={()=>setIsLogin(true)}>로그인</LoginButton>
        </Container>
    )
}

export default Login

const IdPassword = styled.div`
    justify-content:start;
    align-items:start;
    color:#9e9e9e;
    margin-bottom:0.3em;
`
const InputType = styled.input`
    color:#9e9e9e;
    margin-bottom:1em;
    width:13vw;
    height:2.5vh;
    background:#212121;
`

const Logo = styled.img`
    width:4vw;
`
const Container = styled.div`
    height:100vh;
    background:black;
    flex-direction:column;
    display:flex;
    justify-content:center;
    align-items:center;
`
const LoginDiv = styled.div`
    font-size:larger; 
    color:white; 
    margin-bottom:1em;
`

const LoginButton = styled.button`
    background:#3d5afe;color:white; margin-top:1em;width:14vw; height:3vh; border-radius:10px;
`

import { useEffect, useState } from "react"
import api from "../api"
import Naviagate from 'react-router-dom';
import {ACCESS_TOKEN, REFRESH_TOKEN} from '../constants'
import jwtDecode from 'jwt-decode';

function ProtectedRoutes({children}){
    const [isAuthenticated,setIsAuthenticated]=useState(null);
    useEffect(()=>{
        auth().catch(()=> setIsAuthenticated(false))
    },[]);

    const refreshToken=async ()=>{
        const refresh=localStorage.getItem(REFRESH_TOKEN);
        try{
            const res=await api.post('back/token/refresh',{
                refresh:refresh
            });
            if(res.status == 200){
                localStorage.setItem(ACCESS_TOKEN,res.data.access);
                setIsAuthenticated(true);
            }
            else{
                isAuthenticated(false);
            }

        }catch(error){
            console.log(error);
            setIsAuthenticated(false);
        }
    }

    const auth=async ()=>{
        const token=localStorage.getItem(ACCESS_TOKEN);
        if(!token){
            console.log('No access key');
            setIsAuthenticated(false);
            return;
        }
        const decode=jwtDecode(token);
        const expiration=decode.exp;
        const now=Date.now()/1000;

        if(expiration<now){
            await refreshToken();
        }
        else{
            setIsAuthenticated(true);
        }
    }

    if(isAuthenticated==null) return <div>Loading...</div>

    return isAuthenticated?{children}:<Naviagate to='/login'/>
}

export default ProtectedRoutes;
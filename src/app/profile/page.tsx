"use client"
import axios from "axios";
import Link from "next/link"
import { useRouter } from "next/navigation";
import {toast} from "react-hot-toast"
import { useState } from "react";

export default function () {
     const router = useRouter()
    const [data, setData] = useState("nothing")
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout successful')
            router.push('/login')
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div>
            <h1 className="flex justify-center align-middle" >profile</h1>
            <p className="flex justify-center item-center" >hello  everyone </p>
        </div> 
        <hr />

        <button onClick={logout} className=" flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  " >
            Logout
        </button>


         </div>

    )
}
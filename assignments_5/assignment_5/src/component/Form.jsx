import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Takedata, Delete, Edit, Change, Remove ,Update} from '../actions/index';
import { takeTheData } from '../reducers/Takedata';
import { putTheData } from '../reducers/Editdata';
import { changeTheData } from '../reducers/Change'

import { Routes, Route, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
//import { Link } from 'gatsby';
import {useNavigate, useLocation } from "react-router-dom";



import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function Form() {

    const [data, setData] = useState({ name: "", email: "", phone: "" })
    const [ndata, setnData] = useState(false)
    const dispatch = useDispatch();
    const myState = useSelector((state) => state.takeTheData);
    const edState = useSelector((state) => state.putTheData);
    const chState = useSelector((state) => state.changeTheData);
    const reState= useSelector((state)=>state.Remove);
    const upState= useSelector((state)=>state.putTheData)


    const location = useLocation();
    
        const navigate = useNavigate();

        // const coursesPage = () => {
        //     history.push("/courses")
        // }

    useEffect(() => {
        console.log("useeffect", edState)
        if (edState) {
            setData(edState)
        }
        if(location.pathname === '/form')
        {
            setData({
                name: "",
                email: "",
                phone: ""
            })
        }
    }, [edState])

    function handleForm(e) {
        
        dispatch(Remove(true));

        const arr =myState.some((e)=>e.email==data.email)
        e.preventDefault()
        if (data.name != "" && data.email != "" && data.phone != "") {
            console.log("ssssss", arr)
            if (!arr) {
                dispatch(Takedata(data))
                setData({ name: "", email: "", phone: "" })
                setnData(false)
                navigate('/');
            }
            else
            {
               // setData({ name: "", email: "", phone: "" })
                setnData(true);
            }
        } else {
            return
        }

    }
    function handleUpdate(e) {
        e.preventDefault()
        if (data.name != "" && data.email != "" && data.phone != ""){
            dispatch(Remove(data))
            
            dispatch(Change(false))
            dispatch(Remove(true));

            setData({
                name: "",
                email: "",
                phone: ""
            })


            navigate('/')
        }
        else
        {
            alert("please fill all the fields")
        }
    }

    function toggle() {
        dispatch(Remove(true));
       
            confirmAlert({
                title: 'Data is Not Saved...!!!!',
                message: 'Are you sure to continue ?',
                buttons: [
                    {
                        label: 'Yes',
                        onClick: () => {
                            dispatch(Remove(upState))
                            setData({ name: "", email: "", phone: "" })
                            dispatch(Change(false))
                            navigate('/');

                            
                        }
                    },
                    {
                        label: 'No',
                        onClick: () => { }
                    }
                ]
            });
    }

    function back(){
        if (data.name != "" || data.email != "" || data.phone != ""){
        confirmAlert({
            title: 'Data is Not Saved...!!!!',
            message: 'Are you sure to continue ?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        navigate('/');
                    }
                },
                {
                    label: 'No',
                    onClick: () => {  }

                }
            ]
        });
    }
    else {
        navigate('/')
    }


    }


    return (
        <div>
              
              <button disabled={!reState}  class=" ml-24 relative inline-flex justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group w-28 h-14" onClick={() => back()}>
          <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
          <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Home</span>
        </button>

            <div className="absolute mt-40" >
                
            {
                ndata?(<div class="bg-red-100 border-l-4 relative left-20 border-red-500 text-red-700 p-4 w  pt-7" role="alert">
                <p class="font-bold">Error</p>
                <p>This Email has already been registered !!!</p>
              </div>):null
            }

                <form class="bg-white rounded-md shadow-2xl p-5 f" onSubmit={handleForm}  >
                    <h1 class="text-gray-800 font-bold text-2xl mb-1">Contact From</h1><br />
                    <p class="text-sm font-normal text-gray-600 mb-8">Welcome Back</p>
                    <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl ">
                        <svg class="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />  <circle cx="12" cy="7" r="4" /></svg>
                        <input class="pl-2 w-full outline-none border-none" type="text" placeholder="Name" value={data.name} onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))} required />
                    </div>
                    <div class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                        <input id="email" class=" pl-2 w-full outline-none border-none" type="email" name="email" placeholder="Email Address" value={data.email} onChange={(e) => { setData((prev) => ({ ...prev, email: e.target.value })) }} required />
                    </div>
                    <div class="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                        <svg class="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>

                        <input class="pl-2 w-full outline-none border-none" type="text" placeholder="Phone No." value={data.phone} onChange={(e) => { setData((prev) => ({ ...prev, phone: e.target.value })) }} required />

                    </div>

                    {
                        chState ? <div class="flex"><button type='button' class=" mr-4 block w-full bg-blue-400 mt-5 py-2 rounded-2xl hover:bg-blue-900 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2" onClick={toggle} >Back</button><button type='button' class="block w-full bg-blue-400 mt-5 py-2 rounded-2xl hover:bg-blue-900 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2" onClick={handleUpdate} >Update</button></div> :(<button type='submit' class="block w-full bg-blue-400 mt-5 py-2 rounded-2xl hover:bg-blue-900 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2" >Submit</button> )

                    }
                    
                   

                    {/* <div class="flex justify-between mt-4">
                        <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Forgot Password ?</span>

                <a href="#" class="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Don't have an account yet?</a>
                    </div> */}

                </form>
            </div>



        </div>
    )
}



{/* <button class="relative inline-flex justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group w-40 h-14" onClick={()=>toggle()}>
<span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
<span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
  <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
  <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Submit Data</span>
</button> */}
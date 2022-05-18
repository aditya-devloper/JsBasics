import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Takedata, Delete , Edit, Change, Update} from '../actions/index';
import { Remove } from '../actions/index';


import { Routes, Route, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
//import { Link } from 'gatsby';
import {useNavigate } from "react-router-dom";

export default function List() {
    const dispatch= useDispatch();
    const myState= useSelector((state)=>state.takeTheData);
    const edState= useSelector((state)=>state.putTheData);
    const chState= useSelector((state)=>state.changeTheData);
    const reState= useSelector((state)=>state.Remove);
    
    //const [disable, setDisable] = React.useState(false)
    const navigate = useNavigate();

    function editi(e){
        dispatch(Edit(e));
        dispatch(Update(e))
       // setDisable(true);
        dispatch(Change(true));
        dispatch(Remove(false));
        navigate('/update');
    }

    const arr = [
        // {
        //     "src": "https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        //     "name": "Aditya",
        //     "email": "adity@test.com",
        //     "phone": "9450160446"
        // },
        // {
        //     "src": "https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        //     "name": "ujjwal",
        //     "email": "ujjwal@test.com",
        //     "phone": "700713504"
        // },
        // {
        //     "src": "https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        //     "name": "vikky",
        //     "email": "vikky@test.com",
        //     "phone": "9450160446"
        // },
        // {
        //     "src": "https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        //     "name": "preet",
        //     "email": "preet@test.com",
        //     "phone": "7007183504"
        // },
        //                                                      https://source.unsplash.com/user/erondu
        // {
        //     "src": "https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        //     "name": "ujjwal",
        //     "email": "ujjwal@test.com",
        //     "phone": "700713504"
        // },
        // {
        //     "src": "https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        //     "name": "ujjwal",
        //     "email": "ujjwal@test.com",
        //     "phone": "700713504"
        // },
        // {
        //     "src": "https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        //     "name": "ujjwal",
        //     "email": "ujjwal@test.com",
        //     "phone": "700713504"
        // },
        // {
        //     "src": "https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        //     "name": "ujjwal",
        //     "email": "ujjwal@test.com",
        //     "phone": "700713504"
        // },
        // {
        //     "src": "https://images.unsplash.com/photo-1613588718956-c2e80305bf61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        //     "name": "ujjwal",
        //     "email": "ujjwal@test.com",
        //     "phone": "700713504"
        // }
    ]

    return (
        <div className=''>

<button  class="relative inline-flex justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group w-28 h-14" onClick={() => navigate('/form')}>
          <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
          <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Form</span>
        </button>


            <div class="a m-center  ml-10 mt-40">
                <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 scroll m-center">
                    <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                        <table class="min-w-full ">
                            <thead>
                                <tr>
                                    <th
                                        class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        Name</th>
                                    <th
                                        class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-center text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        Email</th>
                                    <th
                                        class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        Contact</th>
                                    <th
                                        class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        Edit</th>
                                    <th
                                        class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                                        Delete</th>
                                </tr>
                            </thead>
                           
                            <tbody class="bg-white  ">
                            
                                {
                                    myState.map((e,idx) => (
                                        <tr>
                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div class="flex items-center">
                                                    <div class="flex-shrink-0 w-10 h-10">
                                                        <img class=" w-16 h-10 rounded-full" src="https://www.getillustrations.com/packs/3d-avatar-illustrations/male/_1x/Avatar,%203D%20_%20man,%20male,%20people,%20person,%20boy,%20child,%20shirt,%20tshirt,%20t-shirt_sm.png"
                                                            alt="admin dashboard ui" />
                                                    </div>

                                                    <div class="ml-4">
                                                        <div class="text-sm font-medium leading-5 text-gray-900">
                                                            {e.name}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>

                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <div class="text-sm leading-5 text-gray-500">{e.email}</div>
                                            </td>

                                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                                <span
                                                    class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">{e.phone}</span>
                                            </td>

                                            <td
                                                class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                                <button disabled={!reState} onClick={()=>(editi(e))}><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-400" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor" >
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg></button>
                                            </td>
                                            <td
                                                class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                                <button disabled={!reState} onClick={()=>(dispatch(Delete(idx)))}><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-400" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor"  >
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg></button>
                                            </td>
                                        </tr>

                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </div>
    )
}

import React, { useState } from 'react'

export default function New_watch() {

    const [x,setx]=useState(true)

    const [sec,setSec]=useState(0);
    const [min,setMin]=useState(0);

    const [interval,seti]=useState()
    
    function s(){
      if(x){
        setx(false)
      let inte=setInterval(() => {
          setSec(sec=>sec+1)
        }, 1000)
      
        if(sec>9)
    {
      setSec(0);
      setMin(min+1);
    }
   
      seti(inte);
      }
    }

    

   function p(){
     console.log("hii")
     clearInterval(interval);
     setx(true);
   }

   function c(){
     setSec(0);
     setMin(0);
     clearInterval(interval);
     setx(true);
   }
    

  return (

    <div class="grid place-items-center h-screen">
    <div class="p-6 w-2/4 h-2/4 shadow-orange-900 bg-green-300 bg-yellow rounded-lg border border-blue-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h1 class=" h-1/4 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><h1>{min< 10 ? "0" + min : min }:{sec < 10 ? "0" + sec : sec }</h1></h1>
        </a>


    
      <br/><br/>
      <button class=" transition ease-in-out delay-150 bg-yellow-500 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 duration-300 ...   cursor-pointer h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800" onClick={s}>Start</button>
      <button class=" transition ease-in-out delay-150 bg-red-700 hover:-translate-y-1 hover:scale-110 hover:bg-red-400 duration-300 ...  cursor-pointer h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800" onClick={p}>Stop</button>
      <button class=" transition ease-in-out delay-150 bg-purple-700 hover:-translate-y-1 hover:scale-110 hover:bg-purple-400 duration-300 ...  cursor-pointer h-10 px-5 m-2 text-purple-100 transition-colors duration-150 bg-purple-600 rounded-lg focus:shadow-outline hover:bg-purple-700" onClick={c}>Reset</button>

     
    </div>
    </div>
  )
  }
import React, { useEffect, useState } from 'react'

export default function Watch() {

  const [time, settime] = useState(0);
  const [t, sett] = useState(false);
  const [m, setm] = useState(0);


  function reset() {
    settime(0)
    setm(0)
    sett(false)
  }

  function start() {
    sett(true);
  }
  var interval;

  useEffect(() => {

    if (t) {
      interval = setInterval(() => {
        settime(time + 1)

      }, 1000)
    }
    if (time > 59) {
      setm(m + 1);
      settime(0);
    }
    return () => clearInterval(interval)

  })

  return (

    <div class="grid place-items-center h-screen">


      <div class="p-6 w-2/4 h-2/4 shadow-orange-900 bg-green-300 bg-yellow rounded-lg border border-blue-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h1 class=" h-1/4 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><h1>{m < 10 ? "0" + m : m}:{time < 10 ? "0" + time : time}</h1></h1>
        </a>
        <br /><br />

        <button class=" transition ease-in-out delay-150 bg-yellow-500 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 duration-300 ...   cursor-pointer h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800" onClick={start}>Start</button>
        <button class=" transition ease-in-out delay-150 bg-red-700 hover:-translate-y-1 hover:scale-110 hover:bg-red-400 duration-300 ...  cursor-pointer h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800" onClick={() => { sett(false) }}>Stop</button>
        <button class=" transition ease-in-out delay-150 bg-purple-700 hover:-translate-y-1 hover:scale-110 hover:bg-purple-400 duration-300 ...  cursor-pointer h-10 px-5 m-2 text-purple-100 transition-colors duration-150 bg-purple-600 rounded-lg focus:shadow-outline hover:bg-purple-700" onClick={reset}>Reset</button>

      </div>

    </div>


//transition ease-in-out delay-150 bg-green-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...


  )
}

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import React from "react";


function App() {
  const [count, setCount] = useState(0);


  return (
    <>
    <div className=" top-0 z-[-2] h-full w-full bg-[#000000bf] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
    
   <div className="text-3xl font-bold text-center h-screen flex justify-center items-center flex-col text-white ">
   <p className="mb-10"> Namaste 🙏</p>
    <div className=" shadow-white/30 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] bg-[#00000072] bg-opacity-50 p-5 rounded-xl">
        <h3>
         Welcome to <span className="text-yellow-300">Nikhil</span>’s Space. A place for ideas, projects, and learning{" "}
        </h3>
      </div>
      </div>
 <div className="flex justify-center items-center ">
      <h2 className="font-bold text-3xl text-white text-center mb-5">
        About Me
      <span
              class=" max-w-14 h-0.5 bg-white z-20 absolute left-0 right-0 mx-auto mt-1/2 block"
            ></span>
      </h2>
      </div>
      <div className="flex justify-center items-center text-white flex-col  sm:flex-row   gap-15">
        <div className="shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] shadow-white/53  bg-black bg-opacity-50 rounded-full">
          {" "}
          <img
            src="/images/nikhil-1.jpg"
            alt="are yaar tu kha chla gya"
            className="w-94 h-94 object-cover rounded-full transition-all duration-200 ease hover:w-100 hover:h-100  "
          />
        </div>
        <div className="mt-5 text-center max-w-xl">
          <p >
            Hello! I'm Nikhil, a passionate developer and tech enthusiast. I
            love creating innovative solutions and exploring new technologies.
            In my free time, I playing badminton, watching movies, and listening
            Music. Welcome to my personal space where I share my projects and
            experiences. Let's connect and create something amazing together!
          </p>
          <p className="hidden">
            Hello! I am Nikhil Yadav from Pink City{" "}
            <span className="text-pink-200">Jaipur</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center ">
     <h2 className="font-bold text-3xl text-white text-center my-15">
         Projects(Construction In Progress , Coming Soon!)
      
      <span
              class=" max-w-17 h-0.5 bg-white z-20 absolute left-0 right-0 mx-auto mt-1 block"
            ></span>
      </h2>
      </div>
      

      {/* <div className="flex justify-center items-center flex-col sm:flex-row">
        <div className="border-2 rounded-2xl border-gray-400 shadow-lg shadow-gray-600 m-3">
          <img
            src="/images/aincode.png"
            alt="daya kuch toh gadbad h"
            className="w-100 p-3"
          />
          <h1 className="text-white text-center m-4 font-bold text-2xl">
            {" "}
            Ai&Code Way
          </h1>
          <p>
            Ai&Code Way is a platform to learn AI and Coding in an easy way. Get
            Prompt Templates
          </p>
        </div>
        <div className="border-2 rounded-2xl border-gray-400 shadow-lg shadow-gray-600 m-3">
          <img
            src="/images/aincode.png"
            alt="daya kuch toh gadbad h"
            className="w-100 p-3"
          />
          <h1 className="text-white text-center m-4 font-bold text-2xl">
            {" "}
            Ride Together
          </h1>
          <p>Ride Together is a ride sharing platform for NITJ Students</p>
        </div>
      </div> */}
      <div className="flex justify-center items-center ">
     
        <h2 className="font-bold text-3xl text-white text-center mb-5">Skills
      <span
              class=" max-w-11 h-0.5 bg-white z-20 absolute left-0 right-0 mx-auto mt-1/2 block"
            ></span>
      </h2>
      </div>
      <div className="flex justify-center items-center gap-5 flex-wrap mb-10">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="p-3 bg-skill rounded-full">
            <img
              src="/images/html-5-svgrepo-com.svg"
              alt="html"
              className="w-16 h-16"
            />
          </div>

          <span className="text-white text-center font-bold">HTML</span>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <div className="p-3 bg-skill rounded-full">
            {" "}
            <img
              src="/images/css-3-svgrepo-com.svg"
              alt="css"
              className="w-16 h-16"
            />
          </div>
          <span className='text-white text-center font-bold'>CSS</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="p-3 bg-skill rounded-full">
            {" "}
            <img
              src="/images/tailwind-svgrepo-com.svg"
              alt="tailwind"
              className="w-16 h-16"
            />
          </div>
          <span className='text-white text-center font-bold'>Tailwind</span>
        </div>

        <div className="flex flex-col justify-center items-center gap-2">
          <div className="p-3 bg-skill rounded-full">
            {" "}
            <img
              src="/images/js-svgrepo-com.svg"
              alt="js"
              className="w-16 h-16"
            />
          </div>
          <span className='text-white text-center font-bold'>JS</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="p-3 bg-skill rounded-full">
            {" "}
            <img
              src="/images/react-svgrepo-com.svg"
              alt="react"
              className="w-16 h-16"
            />
          </div>
          <span className='text-white text-center font-bold'>React</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="p-3 bg-skill rounded-full">
            {" "}
            <img
              src="/images/node-js-svgrepo-com.svg"
              alt="node"
              className="w-16 h-16"
            />
          </div>
          <span className='text-white text-center font-bold'>NodeJs</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="p-3 bg-skill rounded-full">
            {" "}
            <img
              src="/images/express-svgrepo-com.svg"
              alt="express"
              className="w-16 h-16"
            />
          </div>
          <span className='text-white text-center font-bold' >ExpressJs</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="p-3 bg-skill rounded-full">
            <img
              src="/images/mongo-svgrepo-com.svg"
              alt="mongo"
              className="w-16 h-16"
            />
          </div>
          <span className='text-white text-center font-bold'>MongoDB</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="p-3 bg-skill rounded-full">
            <img
              src="/images/python-svgrepo-com.svg"
              alt="python"
              className="w-16 h-16"
            />
          </div>
          <span className='text-white text-center font-bold'>Python</span>
        </div>
      </div>
  <div className="flex justify-center items-center ">
      <h2 className="font-bold text-3xl text-white text-center mb-5">
        Reach Out to Me
      <span
              class=" max-w-30 h-0.5 bg-white z-20 absolute left-0 right-0 mx-auto mt-1/2 block"
            ></span>
      </h2>
      </div>
      <div className="flex justify-center items-center gap-5 flex-wrap  ">
       

          {/* <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500"></span>*/}
          <a className="inline-flex items-center gap-x-1.5 py-2.5 px-5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500 hover:text-blue-500 hover:bg-blue-800/80" href="https://www.linkedin.com/in/nikhil0148">LinkedIn</a> 
          <a className="inline-flex items-center gap-x-1.5 py-2.5 px-5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500 hover:text-blue-500 hover:bg-blue-800/80" href="https://twitter.com/nikhil0148">Twitter(X)</a> 
          <a className="inline-flex items-center gap-x-1.5 py-2.5 px-5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500 hover:text-blue-500 hover:bg-blue-800/80" href="https://github.com/nikhilydv0148">GitHub</a> 
          <a className="inline-flex items-center gap-x-1.5 py-2.5 px-5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500 hover:text-blue-500 hover:bg-blue-800/80" href="https://peerlist.io/nikhil0148">Peerlist</a> 
          <a className="inline-flex items-center gap-x-1.5 py-2.5 px-5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500 hover:text-blue-500 hover:bg-blue-800/80" href="mailto:contact.nikhim@gmail.com">Email</a> 
        
       

      </div>
    <div className="relative w-full h-26 sm:h-64 overflow-hidden">
  <p className="
    absolute top-1/5 left-1/2 -translate-x-1/2
    text-[12vw] font-extrabold
    text-white/70
    whitespace-nowrap
    tracking-widest
    uppercase
    select-none
  ">
    Nikhil Yadav
  </p>
</div>

      
      </div>
    </>
  );
}

export default App;

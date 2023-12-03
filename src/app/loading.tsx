"use client"

import { Bars } from "react-loader-spinner"

export default function Loading(){
    return (
       <div className="w-screen h-screen flex flex-col items-center justify-center">

 <Bars
  height="80"
  width="80"
  color="#1a51eb"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
       </div>
    )
}
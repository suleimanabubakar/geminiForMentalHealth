"use client"
import Modal from "./ui/Modal";
import Image from "next/image";
import { Slider } from "./ui/slider";

const GetStared = ({gender,setGender,name,setName,age,setAge,setProceed}) => {

    const genders = ['boy','girl']

    const handleSubmit = () => {
     
        if(gender.length > 0 && name.length > 0 && age.length > 0 ){
            setProceed(true)
        }
    }

    return ( 
        <Modal>
             <div className="flex items-center border-b pb-3">
        <Image src={'/gemini.png'} width={50} height={50} />

        <p className="font-bold font-title mr-2 text-gray-600" >Welcome To Gemini</p>
        <p className="font-bold font-title  mr-2 text-white bg-slate-900 rounded-lg py-2 px-2 text-xs ml-3" >For Mental Health</p>


        </div>


<div className="w-full flex flex-wrap my-8">
<div className="text-gray-500 w-full text-sm  lg:w-2/3 p-2 text-left leading-relaxed  ">

<p htmlFor="" className="text-gray-600 font-title text-lg">Enter Name</p>


  <input
    name="name"
    value={name}
    onChange={(e)=>setName(e.target.value)}
    // placeholder="Enter your Name"
    
    type="text"
    className="border border-1 text-lg font-title  bg-transparent text-black font-me placeholder:text-gray-400  focus:outline-none focus:ring-1 focus:border-slate-700 focus:ring-slate-700 focus:ring-opacity-900 py-4 px-5 rounded-lg w-full border-gray-200 mt-3 "
  />

</div>


<div className="text-gray-500 w-full text-sm lg:w-1/3 p-2 text-left leading-relaxed ">

<p htmlFor="" className="text-gray-600 font-title text-lg">Age</p>


  <input
    name="age"
    
    value={age}
    onChange={(e)=>setAge(e.target.value)}
    // placeholder="Enter your Name"
    
    type="name"
    className="border border-1 text-lg font-title  bg-transparent text-black font-me placeholder:text-gray-400  focus:outline-none focus:ring-1 focus:border-slate-700 focus:ring-slate-700 focus:ring-opacity-900 py-4 px-5 rounded-lg w-full border-gray-200 mt-3 "
  />

</div>






</div>








        <div className="w-full flex justify-between lg:w-1/2 mx-auto my-">
         
         {
            genders.map(gen=>
                <div 
                onClick={()=>setGender(gen)}
                className={`rounded-full h-[110px] w-[110px] border-4 ${gen == gender && 'border-slate-900'} overflow-hidden`} >
                <Image src={`/${gen}.jpeg`} height="100" width="100" />
            </div>
            )
         }
           
        
        </div>



<div className="w-full lg:w-2/3 mx-auto my-7">
    <button onClick={handleSubmit} className="w-full py-4 font-title rounded-full text-lg bg-slate-900 text-white">
        Get Started
    </button>
</div>


       


        </Modal>
     );
}
 
export default GetStared;
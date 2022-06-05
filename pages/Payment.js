import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from 'next/image'
import { FaStar } from "react-icons/fa";
import { useState } from "react"
import {useRef} from 'react';


export const Payment = () => {
  const stars = Array(5).fill(0)


  const [rating, setRating] = useState(0) // initial rating value

  
    
    // const [cardnumber, setcardnumber] = useState("");
    // const [cvv, setcvv] = useState("");
    // const [expdate, setexp] = useState("");
    //const [phone, setphone] = useState("");
    

    const cardRef = useRef(null);
  const cvvRef = useRef(null);
  const expRef = useRef(null);
  const phRef = useRef(null);
  

    const handleSubmit = event => {
        console.log('handleSubmit ran');
        event.preventDefault(); 
        // setcardnumber('');
        // setcvv('');
        //setphone('');
        
        //event.target.reset();
        
        cardRef.current.value('');
        cvvRef.current.value('');
        expRef.current.value('');
        phRef.current.value('');
      };

    return (
        <div>
            <Header/>
            <div className="flex h-fit  ">
            <div className="relative  flex-1 w-0 hidden lg:block   h-full justify-center ">
            <div className="font-[Poppins]  text-secondary pt-10 pb-10 pl-20 pr-20 ">
        <div className="border-2 border-slate-300 w-96 h-60 rounded  font-[Poppins] bg-white ">
            <h1 className="font-extrabold px-4 py-2">Your Trip</h1>
            <h2 className="font-extrabold px-4 py-2 ">Dates</h2>
            <div className="flex justify-between px-4 gap-y-0" >
                            <p className=" -mt-4 ">Feb 3-7</p>
                            <p className="-mt-4 items-end justify-end underline decoration-1 font-extrabold" >Edit</p>
                        </div>

                        
            <h2 className="font-extrabold px-4 py-4">Check-in-time</h2>
            <div className="flex justify-between px-4" >
                            <p className="  -mt-4">12:00 PM - 2:00 PM</p>
                            <p className="-mt-4 items-end justify-end underline decoration-1 font-extrabold" >Edit</p>
                        </div>

                        <h2 className="font-extrabold px-4 py-4">Guests</h2>
            <div className="flex justify-between px-4 " >
                            <p className="-mt-6">2 guests</p>
                            <p className=" -mt-6 items-end justify-end underline decoration-1 font-extrabold" >Edit</p>
                        </div>
        </div>
        </div>
        <div className="font-[Poppins]  text-secondary  pb-10 pl-20 pr-20">
        <div className="border-2 border-slate-300 w-96 h-auto rounded  font-[Poppins] bg-white">
          <h1 className="px-3 font-extrabold text-xl pt-2">Pay With</h1>  


<div className="flex  items-center   md:shadow-sm bg-white">
                    <button type="button" className="text-secondary w-96 rounded-md bg-white   font-medium  px-3 py-2 ">
                        <div className="flex justify-between" >
                            <p className="font-semibold text-normal space-between">Credit or Debit Card</p>
                            
                        </div>
                    </button>
        </div>
        <div className=" w-auto outline-none opacity-70 px-2  flex bg-transparent border-0 border-t-2 border-slate-300  ">
                </div>
        <div className="pt-5">
            <form onSubmit={handleSubmit}>
            <label className="px-5  text-md font-light text-secondary">
            Card Number
            <input
            type="number"
            //onChange={(e) => setcardnumber(e.target.value)}
            ref={cardRef}
              placeholder="Enter your card number"
              className="flex w-80 px-5 py-2 border-0 border-b-0 border-gray-700 bg-transparent text-xs font-light opacity-70 outline-none focus:border-b-primary focus:ring-0"
            />
          </label>

          <label className="px-0 py-2 text-md font-light text-secondary">
            CVV
            <input
            type="number"
            //onChange={(e) => setcvv(e.target.value)}
            ref={cvvRef}
              placeholder="Enter your CVV "
              className="flex w-80 px-5 py-2 border-0 border-b-0 border-gray-700 bg-transparent text-xs font-light opacity-70 outline-none focus:border-b-primary focus:ring-0"
            />
          </label>
          <label className="px-4  text-md font-light text-secondary">
            Expiration 
            <input
            type="date"
            //onChange={(e) => setexp(e.target.value)}
            ref={expRef}
              placeholder="Enter your expiration "
              className="flex w-80 px-5 py-2 border-0 border-b-0 border-gray-700 bg-transparent text-xs font-light opacity-70 outline-none focus:border-b-primary focus:ring-0"
            />
          </label>
          <div className=" w-auto outline-none opacity-70 px-2  flex bg-transparent border-0 border-t-2 border-slate-300  ">
                </div>
            </form>
        </div>

        <div className="flex  items-center   md:shadow-sm bg-white">
                    <button type="button" className="text-secondary w-96 rounded-md bg-white   font-medium  px-3 py-2 ">
                        <div className="flex justify-between" >
                            <p className="font-semibold text-normal space-between">JazzCash</p>
                        </div>
                    </button>
        </div>

        <div className="pt-0">
            <form onSubmit={handleSubmit}>
            <label className="px-5  text-md font-light text-secondary">
            Phone Number
            <input
            type="number"
            //onChange={(e) => setphone(e.target.value)}
            ref={phRef}
              placeholder="Enter your Phone number"
              className="flex w-80 px-5 py-2 border-0 border-b-0 border-gray-700 bg-transparent text-xs font-light opacity-70 outline-none focus:border-b-primary focus:ring-0"
            />
          </label>
          </form>
          <div className=" w-auto outline-none opacity-70 px-2  flex bg-transparent border-0 border-t-2 border-slate-300  ">
                </div>
          </div>



        <div className="flex  items-center   md:shadow-sm bg-white">
                    <button type="button" className="text-secondary w-96 rounded-md bg-white   font-medium  px-3 py-2 ">
                        <div className="flex justify-between" >
                            <p className="font-semibold text-normal space-between">EasyPaisa</p>
                        </div>
                    </button>
                    
        </div>
        <div className="pt-0">
            <form onSubmit={handleSubmit}>
            <label className="px-5  text-md font-light text-secondary">
            Phone Number
            <input
            type="number"
            //onChange={(e) => setphone(e.target.value)}
            ref={phRef}
              placeholder="Enter your Phone number"
              className="flex w-80 px-5 py-2 border-0 border-b-0 border-gray-700 bg-transparent text-xs font-light opacity-70 outline-none focus:border-b-primary focus:ring-0"
            />
          </label>
          </form>
          
          </div>


          
        </div>
        <p className="  underline decoration-1">We'll call or text you to confirm your number.</p>
        <div className="text-center ">
                    <button   className=" text-base bg-primary text-white w-96  py-2 shadow-md inline-block
           rounded-full font-extrabold my-3 "> Continue </button>
                </div>
                
            <div className="flex justify-between">
                <div className=" w-40 outline-none opacity-70 px-2  flex bg-transparent border-0 border-t-2 border-slate-300  ">
                </div>
                <p className="pl-0 pt-0 -mt-2" >OR</p>
                <div className=" w-40 outline-none opacity-70 px-2  flex bg-transparent border-0 border-t-2 border-slate-300  ">
                </div>
                        </div>

                        <div className="flex  pt-8  gap-16 ">
                    <button   className=" text-base bg-white py-1  border-2 border-slate-200 w-20 h-7
           rounded-full  "> 
           <Image className="" src="/facebook.png" alt="facebookIcon" height="20px" width="25px" /> 
           
           </button>
           
           <button   className=" text-base bg-white py-1  border-2 border-slate-200 w-20 h-7
           rounded-full  "> 
           <Image className="" src="/google.png" alt="GoogleIcon" height="20px" width="25px" /> </button>
           
           <button   className=" text-base bg-white py-1  border-2 border-slate-200 w-20 h-7
           rounded-full  "> 
           <Image className="" src="/email.png" alt="emailIcon" height="20px" width="25px" /> </button>
                </div>
                
                
                
                
                
                
                   
        </div>
        <div className="text-center mb-14">
                    <button  
                    type="submit"
                     className=" text-base bg-primary text-white w-40  py-2 shadow-md inline-block
           rounded-md font-bold my-3 bg-gradient-to-br from-primary to-[#8a5759] opacity-55"> Confirm and Pay </button>
                </div>
         
        </div>
      
       

        <div className="flex w-[50%]  flex-1 flex-col     sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className=" pt-10 ">
        <div className="border-2 border-slate-300 w-96 h-80 rounded  font-[Poppins] bg-white">
            <div className="flex items-center mx-4 my-4">
            <Image className="rounded-lg" src="/murree.PNG" alt="Murree" height="140px" width="170px" />
            <div className="flex flex-col mx-2 font-[Poppins] text-secondary">
    <span >Entire rental units</span>
    <span className="">Khyz views</span>
    <div className="my-7">
    <span className="py-6  font-[Poppins] text-secondary">Ratings</span>
    <div style={styles.stars}>
    {stars.map((_, index) => {
      return(
                 <FaStar 
                 key={index}
              size={12}
              style={{
                marginRight: 5,
                cursor: "pointer"
              }}
            />
      )
          })}
          </div>
            </div>
  </div>
  </div>
           
            <div className=" w-80 outline-none opacity-70 mx-4   mt-6 bg-transparent border-0 border-b-2 border-slate-300  ">
                </div>
                <h1 className="font-bold px-4 py-3 font-[Poppins] text-secondary">Price details</h1>
                <div className=" flex justify-between px-4 " >
                            <p className="-mt-2 font-[Poppins] text-secondary font-normal" >Accommodation</p>
                            <p className=" -mt-2 items-end justify-end font-[Poppins] text-secondary font-normal px-6" >Rs. 1500</p>
                        </div>
                        <div className=" flex justify-between px-4 " >
                            <p className="-mt-2 font-[Poppins] text-secondary font-normal" >Monthly discount</p>
                            <p className=" -mt-2 items-end justify-end font-[Poppins] text-secondary font-normal px-8" >Rs. 100</p>
                        </div>
                        <div className=" flex justify-between px-4 " >
                            <p className="-mt-2 font-[Poppins] text-secondary font-normal" >Cleaning fee</p>
                            <p className=" -mt-2 items-end justify-end font-[Poppins] text-secondary font-normal px-8" >Rs. 500</p>
                        </div>
                        <div className=" flex justify-between px-4 " >
                            <p className="-mt-2 font-[Poppins] text-secondary font-normal" >Service fee</p>
                            <p className=" -mt-2 items-end justify-end font-[Poppins] text-secondary font-normal px-8" >Rs. 500</p>
                        </div>
                        <div className=" flex justify-between px-4 " >
                            <p className="-mt-2 font-[Poppins] text-secondary font-extrabold" >Total</p>
                            <p className=" -mt-2 items-end justify-end font-[Poppins] text-secondary font-extrabold px-6" >Rs. 2500</p>
                        </div>
        </div>
        </div>
        </div>
         

        </div>
        <Footer/>
        </div>
    );
};
const styles = {
  stars: {
    display: "flex",
    flexDirection: "row",
  }
};

export default Payment
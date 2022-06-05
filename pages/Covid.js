import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

function Covid() {
    return (
        <div>
            <Header />
            <div className="font-[Poppins] space-y-2 text-secondary pt-10 pb-10  ">
                <div className="flex items-center justify-center">
                    <h1 className="font-extrabold text-[30px]">A safer return to travel</h1>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="mx-24 my-10">
                <Image className="rounded-lg" src="/mask.jpg" alt="Mask" height="300px" width="400px" />
                <span className="font-extrabold px-36 underline underline-offset-2">Mask</span>
                </div>

                <div className="mx-24 my-8">
                <Image className="rounded-lg" src="/uncle mask.jpg" alt="Safety" height="300px" width="400px" />
                <span className="font-extrabold px-36 underline underline-offset-2">Safety</span>
                </div>
                
                <div className="mx-24 my-8">
                <Image className="rounded-lg" src="/sanitizer.jpg" alt="Sanitizer" height="300px" width="400px" />
                <span className="font-extrabold px-36 underline underline-offset-2">Sanitizer</span>
                </div>

                <div className="mx-24 my-8">
                <Image className="rounded-lg" src="/boy corona.jpg" alt="boy corona" height="300px" width="400px" />
                <span className="font-extrabold px-36 underline underline-offset-2">Corona</span>
                </div>
                
                </div>

         <div className="flex items-center justify-center">
                    <h1 className="font-extrabold text-[30px]">Safety is shared responsibility</h1>
                </div>

            <div className="grid grid-cols-3 ">
                    <div className="mx-24 my-10">
                <Image className="rounded-lg" src="/maskwearing.png" alt="Mask" height="150px" width="150px" />
                <h2 className="font-extrabold px-8">Mask Wearing</h2>       
                <p className="-mx-5 mt-4">When persons(Hosts and guests) <br/> interacting  to each other then all persons must follow  local laws <br/> and guidelines related to wearing masks.</p>
         </div>

         <div className="mx-20 my-10">
                <Image className="rounded-lg" src="/socialdistance.png" alt="socialdistance" height="150px" width="150px" />
                <h2 className="font-extrabold px-8">Social Distance</h2>       
                <p className="-mx-5 mt-4">When persons(Hosts and guests) <br/> meet  to each other then all persons must maintain 6 feet (2 meters) distance.</p>
         </div>

         <div className="mx-20 my-10">
                <Image className="rounded-lg" src="/cleaning.png" alt="cleaning" height="150px" width="150px" />
                <h2 className="font-extrabold px-8">Mask Wearing</h2>       
                <p className="-mx-5 mt-4">All hosts must be committed  to four steps enhanced process.
These are Prepare,Cleaning, Sanitize,Reset.</p>
         </div>


                </div>    
                 
                
            </div>
            <Footer />
        </div>
    )
}

export default Covid